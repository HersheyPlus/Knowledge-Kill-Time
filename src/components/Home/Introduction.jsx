import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import LinkBtn from "../Button/LinkBtn";
function Introduction() {

  return (
    <div className="mx-auto w-[82%] md:w-[88%] h-full p-2 dark:text-white text-black mb-[2rem]">
      <div>
      <div className="flex justify-start items-center sm:justify-center p-2 md:p-0">
        <h1 className="inline-block text-3xl md:text-5xl lg:text-6xl font-semibold md:mb-4 2xl:mb-6">What&#8216;s up Bro -3-</h1>
      </div>
      <div className="p-2 mb-[1.5rem] md:mb-[3rem]">
        <p className="text-[0.6rem] md:text-lg 2xl:text-xl ">Empowering You to Master Programming Skills

At <a href="/" className="underline text-blue-500 hover:text-blue-700">Melbromss Eiei</a>, we&#x2018;re on a mission to revolutionize the way you learn and engage with programming. Whether you&#x2018;re a budding coder, an enthusiast looking to expand your skills, or a seasoned professional seeking to stay updated with the latest trends, we&#x2018;ve got you covered.

Unlock Your Potential
Programming isn&#x2018;t just about lines of code; it&#x2018;s about unlocking creativity, problem-solving, and innovation. Our platform offers an immersive learning experience designed to empower you to excel in various programming languages and domains. From Python to JavaScript, web development to machine learning, dive into a world of possibilities and watch your skills flourish.

Learning Made Engaging
Gone are the days of monotonous lectures and dull textbooks. Our interactive learning modules, dynamic tutorials, and hands-on exercises make learning programming both enjoyable and effective. Engage with real-world examples, interactive challenges, and a supportive community of learners and mentors dedicated to your growth.

Dive Into a Rich Repository of Resources
Explore a rich repository of resources curated by industry experts and seasoned programmers. Dive into a vast library of articles, video tutorials, practical guides, and in-depth explanations. Whether you&#x2018;re a beginner or an advanced coder, find resources tailored to your skill level and learning pace.

Join Our Vibrant Community
Learning is most fulfilling when it&#x2018;s shared. Connect with like-minded individuals, share insights, and collaborate on projects within our vibrant community. Ask questions, participate in discussions, and gain valuable perspectives from a diverse network of learners, educators, and industry professionals.

Your Learning Journey Starts Here
Embark on an exciting journey of discovery, growth, and mastery. Whether you&#x2018;re looking to build the next groundbreaking app, enhance your career prospects, or simply explore the world of programming, <a href="/" className="underline text-blue-500 hover:text-blue-700">Melbromss Eiei</a> is your gateway to success.

Join us today and unlock the infinite possibilities of programming!
        </p>
      </div>
      </div>
      <div className="flex justify-between flex-wrap gap-4 xl:justify-around">
      <div
          className="max-w-sm max-h-[15rem] md:max-h-full p-2 md:p-6 bg-white border md:max-w-full lg:max-w-[18.5rem] xl:max-w-[25rem] 3xl:max-w-xl  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        >
        <div className="text-black dark:text-white text-xl md:text-3xl mb-2 md:mb-4">
            <FaRegUserCircle />
        </div>
          <h5 className="mb-2 text-sm md:text-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white leading-4 md:leading-7">
            Wanna know more about us ?
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-[.7rem] md:text-lg mb-4">
            We&#x2019;re so pround for creating this website for everyone, but not everyone know about us
          </p>
          <LinkBtn path={'/about'}  className={"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-semibold rounded-lg text-xs  md:text-base p-2 md:px-5 md:py-2.5 text-center me-2 mb-2 w-full"} title={"Explore"} />
      </div>
      <div
          className="max-w-sm max-h-[15rem] md:max-h-full p-2 md:p-6 bg-white border md:max-w-full lg:max-w-[18.5rem] xl:max-w-[25rem] 3xl:max-w-xl  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        >
        <div className="text-black dark:text-white text-xl md:text-3xl mb-2 md:mb-4">
            <FaCode />
        </div>
          <h5 className="mb-2 text-sm md:text-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white leading-4 md:leading-7">
            Get started with us
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-[.7rem] md:text-lg mb-4">
            Being programmer is not easy, but we can help you and give some guide, Let&#x2019;s learn and don&#x2019;t give up.
          </p>
          <LinkBtn path={'/learning'}  className={"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-semibold rounded-lg text-xs  md:text-base p-2 md:px-5 md:py-2.5 text-center me-2 mb-2 w-full"} title={"Let's Learn"}/>
      </div>
      <div
          className="max-w-sm max-h-[15rem] md:max-h-full p-2 md:p-6 bg-white border md:max-w-full lg:max-w-[18.5rem] xl:max-w-[25rem] 3xl:max-w-xl  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        >
        <div className="text-black dark:text-white text-xl md:text-3xl mb-2 md:mb-4">
            <IoSearch />
        </div>
          <h5 className="mb-2 text-sm md:text-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white leading-4 md:leading-7">
            Find APIs for test
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-[.7rem] md:text-lg mb-4">
            API is enable applications to exchange data and functionality easily and securely
          </p>
          <LinkBtn path={'/learning'}  className={"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-semibold rounded-lg text-xs  md:text-base p-2 md:px-5 md:py-2.5 text-center me-2 mb-2 w-full"} title={"Get APIs link"}/>
      </div>
      <div
          className="max-w-sm max-h-[15rem] md:max-h-full p-2 md:p-6 bg-white border md:max-w-full lg:max-w-[18.5rem] xl:max-w-[25rem] 3xl:max-w-xl  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-3"
        >
        <div className="text-black dark:text-white text-xl md:text-3xl mb-2 md:mb-4">
            <SiBuymeacoffee /> 
        </div>
          <h5 className="mb-2 text-sm md:text-[1.4rem] font-bold tracking-tight text-gray-900 dark:text-white leading-4 md:leading-7">
            Buy me a coffee
          </h5>
          <p className="text-gray-700 dark:text-gray-400 text-[.7rem] md:text-lg mb-4">
            If you think you have a lot of money or you&#x2019;re billionaire or so on, you can support us here.
          </p>
          <LinkBtn path={'https://www.buymeacoffee.com/melbromss'}  className={"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-semibold rounded-lg text-xs  md:text-base p-2 md:px-5 md:py-2.5 text-center me-2 mb-2 w-full"} title={"Buy it for us"}/>
      </div>
      </div>
    </div>
  );
}

export default Introduction;
