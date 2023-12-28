/* eslint-disable react/prop-types */
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Clipboard(props) {
  const { title, link } = props;
  const [copied, setCopied] = useState(false);
  const [isDelay, setIsDelay] = useState(false);

  const handleCopy = () => {
    if (!isDelay) {
      setCopied(true);
      setIsDelay(true);

      setTimeout(() => {
        setCopied(false);
        setIsDelay(false);
      }, 2000);
    }
  };

  return (
    <div>  
          <div className="mx-auto dark:text-white text-gray-800 mb-3 lg:mb-5 w-[90%] sm:w-[85%] lg:w-[70%] 2xl:w-[65%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl mt-3">
              {title}
            </h1>
          </div>
          <div className=" bg-gray-200 flex w-[90%] sm:w-[85%] lg:w-[70%] 2xl:w-[65%] mx-auto text-black mb-6 rounded-lg">
            <div className="p-2 w-full overflow-scroll px-3 md:px-4 2xl:px-5">
              <h1 className="text-xs md:text-sm lg:text-base 2xl:text-lg">
                {link}
              </h1>
            </div>
            {copied ? (
              <button className=" bg-blue-500 flex justify-center items-center w-[17%] sm:w-[10%] lg:text-xl rounded-md hover:text-white text-white">
                <FaCheck />
              </button>
            ) : (
              <CopyToClipboard text={link} onCopy={handleCopy}>
                <button className="bg-blue-500 dark:bg-blue-600  flex justify-center items-center w-[17%] sm:w-[10%] lg:text-xl rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 text-white hover:text-white">
                  <FaCopy />
                </button>
              </CopyToClipboard>
            )}
          </div>
    </div>
  );
}

export default Clipboard;
