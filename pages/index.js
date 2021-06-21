import { useState } from "react";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Header } from "../src/Components/IndexPageComponents/Header/Header";
import { Sidebar } from "../src/Components/Sidebar/Sidebar";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div id="container" className="flex flex-col h-screen bg-theme-bg">
      <div id="navbar" className="w-screen">
        {/* {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
          />
        )} */}
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <NavBar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      </div>
      <div id="header">
        <Header />
      </div>
      <div id="scroll-down-icon"></div>
    </div>
  );
}
