import { AiOutlineClose } from "react-icons/Ai";
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`absolute h-full w-3/4 transform transition-all duration-1000 ease-in-out backdrop-filter backdrop-blur-lg z-10 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <button onClick={() => setSidebarOpen(false)} className="focus:outline-none">
        <AiOutlineClose className="text-white text-2xl z-30 m-3" />
      </button> */}
      <div>
        <div className="bg-white w-full h-full opacity-5"></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export { Sidebar };
