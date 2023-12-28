import { databases } from "../../data/databases";
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { SiHelpscout } from "react-icons/si";
import LinkBtn from "../../components/Button/LinkBtn";
import { FaLaptopCode } from "react-icons/fa6";
import {motion} from 'framer-motion';
function DBList() {
  return (
    <>
      <div className="w-full flex justify-evenly items-center">
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
            path={"/learning/libraries"}
            className={
              "inline-flex justify-center items-center  p-2 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-full text-3xl md:text-4xl lg:text-5xl"
            }
            title={<IoLibrary />}
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
      <div className="mx-auto w-[92%] h-full py-2 dark:text-green-400 text-gray-600 grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4  3xl:grid-cols-5 gap-6">
        {databases.map((database, index) => (
            <motion.div
            whileHover={{ scale: 0.9,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)" }}
            whileTap={{scale : 0.8}}
            className="card card-compact w-full md:w-full bg-gray-100 dark:bg-zinc-600 shadow-xl"
            key={index}
          >
            <a href={database.link} className="rounded-md md:rounded-xl" target="_blank" rel="noreferrer">
            <figure className="bg-gray-300 h-[6.5rem] md:h-[8.5rem] xl:h-[9.5rem] 2xl:h-[10.5rem]">
              <img
                src={database.img}
                alt={database.name}
                className="w-[4.5rem] md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem] 2xl:w-[6.5rem] 3xl:w-[7rem]"
              />
            </figure>
            <div className="card-body mt-[-.9rem] md:mt-[-.75rem] xl:mt-[-.6rem] overflow-hidden">
              <h2 className="card-title text-[.7rem]  md:text-[.8rem] xl:text-[1rem] font-semibold gap[0.2e]">
                <FaDatabase />
                {database.name}
              </h2>
              <p className="text-[.5rem] sm:text-[.6rem] md:text-[.7rem] xl:text-[.8rem] leading mt-[-.8rem] md:mt-[-.6rem] xl:mt-[-.4rem] 3xl:mt-[-.2rem] leading-3">
              Learn more
              </p>
            </div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default DBList;
