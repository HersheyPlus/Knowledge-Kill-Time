import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { SiHelpscout } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import LinkBtn from "../../components/Button/LinkBtn";


function Learning() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          You are here, Let&#8216;s learn!
        </h1>
        <p className="mb-16 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          We wish everyone enjoy to learn and grow together. It is our pleasure to see our website could help you to find what you like and what you want. Bless you!
        </p>
        <div className="flex flex-col space-y-4 w-[90%] md:w-[75%] mx-auto">
            <LinkBtn path={"/learning/languages"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-8xl"} title={<FaCode />} />
            <LinkBtn path={"/learning/frameworks"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-7xl"} title={<SiHelpscout />} />
            <LinkBtn path={"/learning/libraries"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-7xl"} title={<IoLibrary />} />
            <LinkBtn path={"/learning/databases"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-7xl"} title={<FaDatabase />} />
            <LinkBtn path={"/learning/services"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-7xl"} title={<FaCloud />} />
            <LinkBtn path={"/learning/ides"} className={"inline-flex justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 h-[4rem]  md:h-[5rem] lg:h-[7rem] w-full text-5xl md:text-6xl lg:text-8xl"} title={<FaLaptopCode />} />
        </div>
      </div>
    </div>
  );
}

export default Learning;
