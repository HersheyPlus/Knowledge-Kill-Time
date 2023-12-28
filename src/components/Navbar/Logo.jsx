import { Link } from "react-router-dom"
import {motion} from "framer-motion"
function Logo() {
  return (
    <motion.div 
    whileHover={{ scale: 1.2 }}
    className="md:mb-2 flex justify-center items-center" id="logo">
    <Link to="/">
      <img
        className="w-12 h-12 p-2 md:w-16 md:h-16 "
        src="/logo.svg"
        alt="sit29-logo"
      />
    </Link>
  </motion.div>
  )
}

export default Logo