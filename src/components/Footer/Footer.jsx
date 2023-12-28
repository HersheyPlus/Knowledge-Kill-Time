import { IoLogoDiscord } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (


<footer className="bg-gray-100 dark:bg-zinc-800">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="md:mb-0 flex justify-center items-center mb-4 md:block">
                  <img src="/mylogo.png" className="h-24 w-32 md:h-28 md:w-36 lg:h-36 lg:w-40 2xl:w-48 2xl:h-48" alt="Sit29 Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-black uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-3">
                          <a href="https://react.com/" className="menu-hover">React</a>
                      </li>
                      <li className="mb-3">
                          <a href="https://nodejs.org/en" className="menu-hover">Node</a>
                      </li>
                      <li className="mb-3">
                          <a href="https://flowbite.com/" className="menu-hover">Flowbite</a>
                      </li>
                      <li className="mb-3">
                          <a href="https://swiperjs.com/" className="menu-hover">Swiper</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-black uppercase dark:text-white">Resource</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-3">
                          <a href="https://www.framer.com/motion/" className="menu-hover">Framer Motion</a>
                      </li>
                      <li className="mb-3">
                          <a href="https://react-icons.github.io/react-icons/" className="menu-hover">React Icons</a>
                      </li>
                      <li className="mb-3">
                          <a href="https://daisyui.com/" className="menu-hover">Daisy UI</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-black uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-3">
                          <a href="https://github.com/" className="menu-hover">on Github</a>
                      </li>
                      <li className="mb-3">
                          <a href="#" className="menu-hover">on Instagram</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-600 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 text-xl">
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-white ms-5">
              <IoLogoDiscord />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaXTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 dark:hover:text-white ms-5">
              <FaLinkedin />
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer