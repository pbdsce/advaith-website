import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";
const MobileMenuHamburger = () => {
  return (
    <div className="flex">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
      </svg>
    </div>
  );
};

const NavBar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex place-items-center py-2 px-2.5 justify-between">
      {isSidebarOpen ? (
        <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl z-30 focus:outline-none">
          <AiOutlineClose />
        </button>
      ) : (
        <button onClick={() => setSidebarOpen(true)} className="text-white text-2xl z-30 focus:outline-none">
          <AiOutlineMenu />
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
