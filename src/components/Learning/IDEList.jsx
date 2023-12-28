import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { SiHelpscout } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { ides } from "../../data/IDEs";
import LinkBtn from "../../components/Button/LinkBtn";
import { motion } from "framer-motion";
function IDEList() {
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
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mx-auto w-[92%] h-full py-2 dark:text-green-400 text-gray-600 grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4  3xl:grid-cols-5 gap-6">
        {ides.map((ide, index) => (
          <motion.div
            whileHover={{
              scale: 0.9,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.8 }}
            className="card card-compact w-full md:w-full bg-gray-100 dark:bg-zinc-600 shadow-xl"
            key={index}
          >
            <a
              href={ide.link}
              className="rounded-md md:rounded-xl"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="bg-gray-300 h-[6rem] md:h-[7rem] xl:h-[7.5rem] 2xl:h-[8rem]">
                <img
                  src={ide.img}
                  alt={ide.name}
                  className="w-[4.7rem] h-[8rem] md:h-[8.5rem] xl:h-[9.5rem] 2xl:h-[10.5rem]"
                />
              </figure>
              <div className="card-body mt-[-.9rem] md:mt-[-.75rem] xl:mt-[-.6rem] overflow-hidden">
                <h2 className="card-title text-[.57rem]  md:text-[.8rem] xl:text-[1rem] font-semibold gap[0.2e]">
                  <FaLaptopCode />
                  {ide.name}
                </h2>
                <p className="text-[.5rem] sm:text-[.6rem] md:text-[.7rem] xl:text-[.8rem] leading mt-[-.8rem] md:mt-[-.6rem] xl:mt-[-.4rem] 3xl:mt-[-.2rem] leading-3">
                Download
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default IDEList;
