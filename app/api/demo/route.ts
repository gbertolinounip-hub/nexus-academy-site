import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_FIELDS = ["nome", "email", "instituicao", "cargo", "area"] as const;

type DemoField = (typeof REQUIRED_FIELDS)[number] | "telefone" | "mensagem";

const LABELS: Record<DemoField, string> = {
  nome: "Nome completo",
  email: "E-mail institucional",
  telefone: "Telefone / WhatsApp",
  instituicao: "Instituição",
  cargo: "Cargo",
  area: "Área do curso",
  mensagem: "Processo que mais consome tempo hoje",
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#475569;font-weight:600;width:220px;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#0f172a;">${escapeHtml(value || "Não informado")}</td>
    </tr>
  `;
}

function buildHtml(fields: Record<DemoField, string>) {
  return `
    <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
          <div style="padding:24px 28px;background:#04060c;color:#ffffff;">
            <h1 style="margin:0;font-size:22px;line-height:1.3;">Nova solicitação de demonstração</h1>
            <p style="margin:8px 0 0;color:#9fb3d4;font-size:14px;">Nexus Academy</p>
          </div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${row(LABELS.nome, fields.nome)}
            ${row(LABELS.email, fields.email)}
            ${row(LABELS.telefone, fields.telefone)}
            ${row(LABELS.instituicao, fields.instituicao)}
            ${row(LABELS.cargo, fields.cargo)}
            ${row(LABELS.area, fields.area)}
            ${row(LABELS.mensagem, fields.mensagem)}
          </table>
          <div style="padding:18px 28px;color:#64748b;font-size:12px;line-height:1.6;">
            Enviado pelo formulário institucional do site Nexus Academy.
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const data = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
  const fields: Record<DemoField, string> = {
    nome: clean(data.nome),
    email: clean(data.email),
    telefone: clean(data.telefone),
    instituicao: clean(data.instituicao),
    cargo: clean(data.cargo),
    area: clean(data.area),
    mensagem: clean(data.mensagem),
  };

  for (const field of REQUIRED_FIELDS) {
    if (!fields[field]) {
      return NextResponse.json({ error: `${LABELS[field]} é obrigatório.` }, { status: 400 });
    }
  }

  if (!isEmail(fields.email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || "contato@nexusacad.com.br";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!host || !Number.isFinite(port) || !user || !pass || !from) {
    console.error("Missing SMTP configuration for demo form.");
    return NextResponse.json(
      { error: "Não foi possível enviar a solicitação agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: fields.email,
      subject: "Nova solicitação de demonstração - Nexus Academy",
      html: buildHtml(fields),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send demo request email.", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a solicitação agora. Tente novamente em instantes." },
      { status: 500 }
    );
  }
}
