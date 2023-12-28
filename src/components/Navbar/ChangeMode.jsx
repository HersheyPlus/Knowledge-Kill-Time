import { motion } from "framer-motion";
import { MdWbSunny } from "react-icons/md";
import PropTypes from "prop-types";
import { IoMoon } from "react-icons/io5";
import { useState } from "react";

function Mode(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  }
  return props.toggle ? (
    <motion.div
      whileHover={{ scale: 1.2}}
      className="text-orange-300 hover:text-orange-200 dark:text-yellow-300 dark:hover:text-yellow-200 flex justify-center items-center p-1"
      id="dark-and-light"
    >
      <button className="mb-2 text-3xl" onClick={toggleMode}>
      {isDarkMode ? <IoMoon /> : <MdWbSunny />}
      </button>
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="text-orange-400 hover:text-orange-300 dark:text-yellow-300 dark:hover:text-yellow-200 md:flex md:justify-center md:items-center hidden"
      id="dark-and-light"
    >
      <button className="text-2xl md:text-[2.5em] lg:text-[2.7em] 2xl:text-[3em]" onClick={toggleMode}>
        {isDarkMode ? <IoMoon /> : <MdWbSunny />}
      </button>
    </motion.div>
  );
}

Mode.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default Mode;
