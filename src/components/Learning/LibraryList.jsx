import { jsLibraries,pythonLibraries,cssLibraries } from "../../data/libraries";
import ListSection from "./ListSection";
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { SiHelpscout } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import LinkBtn from "../../components/Button/LinkBtn";

function LibraryList() {
  const icon = <IoLibrary />;
  return (
    <>
      <div className="w-full flex justify-evenly items-center mb-10">
        <LinkBtn
          path={"/learning/languages"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<FaCode />}
        />
        <LinkBtn
          path={"/learning/frameworks"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<SiHelpscout />}
        />
        <LinkBtn
          path={"/learning/databases"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<FaDatabase />}
        />
        <LinkBtn
          path={"/learning/services"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<FaCloud />}
        />
        <LinkBtn
          path={"/learning/IDEs"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<FaLaptopCode />}
        />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection title={"JavaScript Libraries"} frameworks={jsLibraries} icon={icon}/>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection title={"Python Libraries"} frameworks={pythonLibraries} icon={icon} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection title={"Css Libraries"} frameworks={cssLibraries} icon={icon} />
    </>
  );
}

export default LibraryList;
