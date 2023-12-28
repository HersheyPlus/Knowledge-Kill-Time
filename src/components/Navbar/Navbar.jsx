import Mode from "./ChangeMode";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import MenuItems from "./MenuItems";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header className="bg-gray-100 dark:bg-zinc-800 w-full top-0 left-0">
      <nav className="w-[95%] mx-auto flex items-center justify-between drop-shadow-2xl">
        <div className="text-black dark:text-white md:hidden text-xl sm:text-2xl flex items-center">
          <button className="" onClick={toggleMenu}>
            {isToggle ? <RxCross2 /> : <TiThMenu />}
          </button>
        </div>
        <Logo />
        <MenuItems />
        <Mode toggle={false} />
      </nav>
      <AnimatePresence>
        {isToggle && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="mt-2 border-t-2 border-t-gray-500 dark:border-t-gray-400 md:hidden"
            id="menu"
          >
            <ul className="mt-1 text-black dark:text-gray-200 flex justify-around mb-2 text-sm gap-2">
              <li className="menu-hover">
                <Link to="/learning">Learning</Link>
              </li>
              <li className="menu-hover">
                <Link to="/apis">APIs</Link>
              </li>
              <li className="menu-hover">
                <Link to="/about">About us</Link>
              </li>
            </ul>
            <Mode toggle={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
