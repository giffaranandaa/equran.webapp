import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaQuran, FaListUl, FaBookmark } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";


const Sidebar = () => {

  return (
    <div
      className={`h-screen bg-[#116A7B] duration-300 relative p-5 pt-6 w-60 text-white flex flex-col justify-between`}
    >
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-x-4">
        <img src={Logo} alt="logoSide" className="w-8 object-cover h-auto" />
        <h1
          className={`text-2xl font-conver font-bold`}
          >
          Equran.app
        </h1>
        </div>
      <div className="flex flex-col pt-12 font-semibold">
        <Link
          to="/"
          className="flex items-center gap-3 text-[18px] hover:bg-[#96bbb8] p-1 mb-4 rounded-md"
        >
          <FaQuran className="text-[20px]" />
          Surat-Surat
        </Link>
        <Link
          to="/asmaul-husna"
          className="text-[18px] flex items-center gap-3 hover:bg-[#96bbb8] p-1 mb-4 rounded-md"
        >
          <FaListUl className="text-[20px]" />
          Asmaul Husna
        </Link>
        <Link className="text-[18px] flex items-center gap-3 hover:bg-[#96bbb8] p-1 mb-4 rounded-md">
          <FaBookmark className="text-[20px]" />
          Bookmark
        </Link>
        <Link className="text-[18px] flex items-center gap-3 hover:bg-[#96bbb8] p-1 mb-4 rounded-md">
          <BsFillInfoSquareFill className="text-[20px]" />
          About
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
