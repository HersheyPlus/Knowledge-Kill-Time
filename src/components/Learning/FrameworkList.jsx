import {
  jsFrameworks,
  pythonFrameworks,
  cssFrameworks,
  phpFrameworks,
  goLangFrameworks,
  rubyFrameworks,
  javaFrameworks,
} from "../../data/frameworks";
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import LinkBtn from "../../components/Button/LinkBtn";
import ListSection from "./ListSection";
import { SiHelpscout } from "react-icons/si";

function FrameworkList() {
  const icon = <SiHelpscout />;
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
          path={"/learning/libraries"}
          className={
            "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
          }
          title={<IoLibrary />}
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
      <ListSection
        title={"JavaScript & TypeScript Frameworks"}
        frameworks={jsFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600" />
      <ListSection
        title={"CSS Frameworks"}
        frameworks={cssFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection
        title={"Python Frameworks"}
        frameworks={pythonFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection
        title={"PHP Frameworks"}
        frameworks={phpFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection
        title={"Java Frameworks"}
        frameworks={javaFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection
        title={"Go Frameworks"}
        frameworks={goLangFrameworks}
        icon={icon}
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <ListSection
        title={"Ruby Frameworks"}
        frameworks={rubyFrameworks}
        icon={icon}
      />
    </>
  );
}

export default FrameworkList;
