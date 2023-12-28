import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function AdminRole() {
  return (
    <div className="shadow-xl rounded-lg dark:shadow-purple-600 dark:bg-slate-800 mx-auto p-4 lg:mt-16 gap-x-4 flex flex-col md:flex-row md:justify-around w-[85%] xl:w-[95%] mb-8 md:mb-12 lg:mb-20 2xl:mb-24 ">
    <div className="avatar flex p-2 mx-auto md:mx-0">
      <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 rounded-full ring ring-primary shadow-lg shadow-purple-600 ring-offset-base-100 ring-offset-2 drop-shadow-xl">
        <img src="/profile.JPG" />
      </div>
    </div>
    <div className=" text-black md:w-[55%] flex flex-col mt-5">
      <div className="grid grid-cols-3 gap-x-1 sm:gap-x-2">
        <div className="text-white bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
          <h2 className="font-bold md:font-extrabold text-[.7rem] sm:text-base  lg:text-xl 2xl:text-2xl overflow-hidden">
            Admin
          </h2>
        </div>
        <div className="text-white bg-purple-700  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
          <h2 className="font-bold md:font-extrabold text-[.7rem] sm:text-base  lg:text-xl 2xl:text-2xl">
            Fronted
          </h2>
        </div>
        <div className="text-white bg-purple-700  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
          <h2 className="font-bold md:font-extrabold text-[.7rem] sm:text-base  lg:text-xl 2xl:text-2xl">
            Backend
          </h2>
        </div>
        <div className="text-white bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
          <h2 className="font-bold md:font-extrabold text-[.7rem] sm:text-base  lg:text-xl 2xl:text-2xl overflow-hidden">
            Infra
          </h2>
        </div>
        
        <div className="text-white bg-purple-700  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md p-1 md:p-2 text-center mb-2 dark:bg-purple-600  dark:focus:ring-purple-900 flex justify-center items-center">
          <h2 className="font-bold md:font-extrabold text-[.7rem] sm:text-base  lg:text-xl 2xl:text-2xl overflow-hidden">
            UX/UI
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-evenly md:justify-start md:gap-x-10 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 md:mt-4 xl:mt-6 3xl:mt-7 2xl:mt-8 text-black dark:text-white">
      <a href="https://github.com/HersheyPlus" className="hover:text-gray-700 dark:hover:text-gray-300"><FaGithubSquare /></a>
      <a href="https://www.instagram.com/melbromss_/" className="hover:text-gray-700 dark:hover:text-gray-300"><FaInstagram /></a>
      <a href="https://twitter.com/MelbromssC" className="hover:text-gray-700 dark:hover:text-gray-300"><FaTwitter /></a>
      <a href="https://www.linkedin.com/in/suphawat-singka-5602b7270/" className="hover:text-gray-700 dark:hover:text-gray-300"><FaLinkedin /></a>
      </div>
    </div>
  </div>
  )
}

export default AdminRole