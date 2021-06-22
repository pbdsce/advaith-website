import Image from "next/image";
import { HamburgerIcon,CloseIcon } from "../svg/svg";

const NavBar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex place-items-center py-2 md:py-5 px-2.5 justify-between bg-theme-bg">
      {isSidebarOpen ? (
        <button onClick={() => setSidebarOpen(false)} className="text-gray-100 text-2xl z-30 focus:outline-none">
          <CloseIcon />
        </button>
      ) : (
        <button onClick={() => setSidebarOpen(true)} className="text-gray-100 text-2xl z-30 focus:outline-none">
          <HamburgerIcon />
        </button>
      )}
      <Image
        src="/Assets/Images/advaith-logo.png"
        width={200}
        height={20}
        className="object-contain"
      />
      <Image src="/Assets/Images/DSCE-logo.png" width={35} height={35} />
    </nav>
  );
};

export { NavBar };
