import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import RoleBtn from "./RoleBtn";

function Role(props) {
  // eslint-disable-next-line react/prop-types
  const { roles, links } = props;
  return (
      <div className="shadow-xl rounded-lg dark:shadow-purple-600 dark:bg-slate-800 md:flex md:justify-between md:flex-wrap p-2 md:p-3 xl:p-4">
        <div className="avatar flex justify-center p-2 ">
          <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 rounded-full ring ring-primary shadow-lg shadow-purple-600  ring-offset-base-100 ring-offset-2 drop-shadow-xl">
            <img src="/profile.JPG" />
          </div>
        </div>
        <div className=" text-black flex flex-col md:w-[45%] lg:w-[40%] mt-2 md:mt-4 lg:mt-6 2xl:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-1 sm:gap-x-2 md:gap-x-1">
            <RoleBtn roles={roles} />
          </div>
        </div>
        <div className="text-black dark:text-white flex items-center justify-around mt-3 md:mt-4  xl:mt-5 text-md sm:text-xl  lg:text-2xl xl:text-3xl 2xl:text-4xl  2xl:mt-8 flex-wrap w-full">
          <a href={links} className="hover:text-gray-700 dark:hover:text-gray-300">
            <FaGithubSquare />
          </a>
          <a href={links} className="hover:text-gray-700 dark:hover:text-gray-300">
            <MdEmail />
          </a>
          <a href={links} className="hover:text-gray-700 dark:hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href={links} className="hover:text-gray-700 dark:hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
  );
}

export default Role;
