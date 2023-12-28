/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {motion} from 'framer-motion';
function LinkBtn(props) {
    const {path, className,title} = props;
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} >
      <Link to={path}>
        <button className={className}>{title}</button>
      </Link>
    </motion.div>
  )
}

export default LinkBtn
{/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}> */}