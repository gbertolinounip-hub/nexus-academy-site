import { CustomCursor, ScrollProgress, SmoothScroll } from "@/components/Chrome";
import CTA from "@/components/CTA";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstallApp from "@/components/InstallApp";
import Infra from "@/components/Infra";
import Intelligence from "@/components/Intelligence";
import Modules from "@/components/Modules";
import Nav from "@/components/Nav";
import NexusIA from "@/components/NexusIA";
import Problem from "@/components/Problem";
import Profiles from "@/components/Profiles";
import Psychometrics from "@/components/Psychometrics";
import Security from "@/components/Security";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Intelligence />
        <Psychometrics />
        <Flow />
        <NexusIA />
        <Profiles />
        <Infra />
        <Security />
        <CTA />
        <InstallApp />
      </main>
      <Footer />
    </>
  );
}
