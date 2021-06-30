import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "../svg/svg";
const NavItems = [
  { itemName: "Home", itemLink: "/#header-section" },
  { itemName: "Events", itemLink: "/#hackathon-section" },
  { itemName: "Schedule", itemLink: "/#schedule-section" },
  { itemName: "Sponsors", itemLink: "/#sponsor-section" },
  { itemName: "FAQ", itemLink: "/#faq-section" },
];
const NavBar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex place-items-center py-2 md:py-5 px-2.5 bg-theme-bg w-full">
      <div className="m-auto container flex place-items-center">
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
        <div className="m-auto md:w-full px-4">
          <a href="/#header-section">
            <img
              id="nav-logo"
              src="/Assets/Images/advaith-logo.png"
              width={200}
              height={20}
              className="object-contain hidden"
            />
          </a>
        </div>
        <div className="hidden md:flex gap-5 place-items-center justify-evenly md:w-full text-white">
          {NavItems.map((nav, key) => (
            <button
              key={key}
              className="flex place-items-center text-theme-primary-500 font-bold outline-none"
            >
              <Link href={nav.itemLink}>
                <a>{nav.itemName}</a>
              </Link>
            </button>
          ))}
        </div>
        <div className="flex justify-end md:w-full gap-10">
          <button
            id="nav-register-button"
            className="hidden px-3 py-1 text-lg bg-theme-primary-400 rounded-sm font-semibold"
          >
            <a href="https://advaithtechfest.typeform.com/to/WVuhBpqL">
              {"Register".toUpperCase()}
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
