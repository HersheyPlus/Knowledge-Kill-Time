/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function ListSection(props) {
  const { title, frameworks, icon } = props;
  return (
    <div className="mx-auto w-[92%]">
      <div className="w-full mb-4 md:mb-6 xl:mb-8 mx-auto flex justify-center">
        <h1 className="text-black dark:text-white text-2xl md:text-4xl 2xl:text-5xl font-extrabold text-center">
          {title}
        </h1>
      </div>
      <div className="mx-auto w-full h-full py-2 dark:text-green-400 text-black grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4  3xl:grid-cols-5 gap-6">
        {frameworks.map((framework, index) => (
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
              href={framework.link}
              className="rounded-md md:rounded-xl"
              target="_blank"
              rel="noreferrer"
            >
              <figure className="bg-gray-300 h-[8rem] md:h-[8.5rem] xl:h-[9.5rem] 2xl:h-[10.5rem]">
                <img
                  src={framework.img}
                  alt={framework.name}
                  className="w-[4.5rem] md:w-[5rem] lg:w-[5.5rem] xl:w-[6rem] 2xl:w-[6.5rem] 3xl:w-[7rem]"
                />
              </figure>
              <div className="card-body mt-[-.9rem] md:mt-[-.75rem] xl:mt-[-.6rem] overflow-hidden">
                <h2 className="card-title text-[.65rem]  md:text-[.8rem] xl:text-[1rem] font-semibold">
                  {icon}
                  {framework.name}
                </h2>
                <p className="text-[.5rem] sm:text-[.6rem] md:text-[.7rem] xl:text-[.8rem] leading mt-[-.8rem] md:mt-[-.6rem] xl:mt-[-.4rem] 3xl:mt-[-.2rem] leading-3">
                  Learn more
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ListSection;
