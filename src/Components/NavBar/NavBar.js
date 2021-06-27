
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "../svg/svg";
const NavItems = [
  { itemName: "Home" },
  { itemName: "Events" },
  { itemName: "Schedule" },
  { itemName: "Sponsors" },
  { itemName: "FAQ" },
];
const NavBar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex place-items-center py-2 md:py-5 px-2.5 justify-between bg-theme-bg">
      <div className="z-30 text-gray-100 text-2xl md:hidden">
        {isSidebarOpen ? (
          <button
            onClick={() => setSidebarOpen(false)}
            className="focus:outline-none"
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            onClick={() => setSidebarOpen(true)}
            className="focus:outline-none"
          >
            <HamburgerIcon />
          </button>
        )}
      </div>
      <div className=" md:w-full">
        <img
          src="/Assets/Images/advaith-logo.png"
          width={200}
          height={20}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex place-items-center justify-evenly  md:w-full text-white">
        {NavItems.map((item, key) => (
          <button
            key={key}
            className="flex place-items-center text-theme-primary-500 font-bold outline-none"
          >
            <Link href="/#">{item.itemName}</Link>
          </button>
        ))}
      </div>
      <div className="flex justify-end  md:w-full gap-10">
        <button className="hidden md:block px-3 py-1 text-lg bg-theme-primary-400 rounded-lg font-semibold">
          <a href="/">Register</a>
        </button>
        {/* <img
          src="/Assets/Images/DSCE-logo.png"
          width={35}
          height={35}
          className="object-contain"
        /> */}
      </div>
    </nav>
  );
};

export { NavBar };
