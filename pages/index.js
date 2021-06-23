import { useState } from "react";
import Head from "next/head";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Header } from "../src/Components/IndexPageComponents/Header/Header";
import { SponsorSection } from "../src/Components/IndexPageComponents/SponsorSection/SponsorSection";
import { About } from "../src/Components/IndexPageComponents/About/About";
import { EventsSection } from "../src/Components/IndexPageComponents/EventsSection/EventsSection";
import { ScheduleTimelineSection } from "../src/Components/IndexPageComponents/ScheduleTimelineSection/ScheduleTimelineSection";
import { Sidebar } from "../src/Components/Sidebar/Sidebar";
import { FAQSection } from "../src/Components/IndexPageComponents/FAQSection/FAQSection";
import { HostSection } from "../src/Components/IndexPageComponents/HostSection/HostSection";
import { CTAButton } from "../src/Components/IndexPageComponents/CTAButton/CTAButton";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      id="container"
      className="flex flex-col bg-theme-bg h-screen overflow-hidden"
    >
      <Head>
        <title>Advaith HackFest</title>
        <meta property="og:title" content="Advaith Hackfest" key="title" />
        <meta
          property="og:description"
          name="description"
          content="Advaith Hackfest - PointBlank"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Head>
      <div id="navbar" className="w-screen shadow-3xl">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <NavBar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>
      <div id="site-content" className="overflow-auto">
        <div id="header">
          <Header />
        </div>
        <About />
        <EventsSection />
        <ScheduleTimelineSection />
        <SponsorSection />
        <FAQSection />
        <HostSection />
        <CTAButton />
      </div>
    </div>
  );
}
