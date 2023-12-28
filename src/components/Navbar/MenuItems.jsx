import { Link } from "react-router-dom"

function MenuItems() {
  return (
    <div
    className="hidden md:block w-[60%] lg:w-1/2"
    id="menu"
    >
      <ul className="text-black dark:text-gray-200 flex justify-between items-center text-lg">
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
</div>
  )
}

export default MenuItems