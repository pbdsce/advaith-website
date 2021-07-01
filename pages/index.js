import { useEffect, useState } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const navLogo = document.getElementById("nav-logo");
    const siteContent = document.getElementById("site-content");
    const navRegister = document.getElementById("nav-register-button");
    siteContent.addEventListener("scroll", () => {
      if (siteContent.scrollTop > 500) {
        navRegister.style.display = "flex";
      } else {
        navRegister.style.display = "none";
      }
      if (typeof window !== "undefined") {
        if (window.innerWidth > 768) {
          if (siteContent.scrollTop > 250) {
            navLogo.style.display = "block";
          } else {
            navLogo.style.display = "none";
          }
        }
      }
    });
  }, []);
  return (
    <div
      id="container"
      className="flex flex-col bg-theme-bg lg:bg-opacity-90 h-screen overflow-hidden"
    >
      <video
        playsInline
        autoPlay
        muted
        loop
        id="myVideo"
        className="hidden lg:block"
      >
        <source src="/Assets/Videos/Veil.mp4" type="video/mp4" />
      </video>
      <Head>
        <title>Advaith HackFest</title>
        <meta
          property="og:title"
          content="Register || Advaith Hackfest"
          key="title"
        />
        <meta
          property="og:description"
          name="description"
          content="Register || 20-26 July 2021 HackFest || Advaith Hackfest - PointBlank"
        />
        <meta
          property="og:image"
          content="/Assets/Images/advaith-yeah-banner.png"
        />
        <meta property="og:url" content="https://fest.dsce.in/" />
        <meta property="og:site_name" content="PointBlank.club" />
        <meta
          name="twitter:image:alt"
          content="Register now https://fest.dsce.in || 20-26 July 2021 HackFest"
        />
        <meta name="twitter:card" content="20-26 July 2021 HackFest" />
        <meta name="twitter:site" content="@pointblank_dsce" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
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
