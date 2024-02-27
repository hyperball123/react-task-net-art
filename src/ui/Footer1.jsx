import { BsTelephoneFill } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { FaGlobe } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[rgba(220,40,40,0.95)] w-full max-h-fit md:h-[8rem] mt-8 p-4 sm:p-0">
      <ul className="pt-4 md:pt-0 sm:h-[80%] flex flex-col md:flex-row justify-evenly items-center gap-4">
        <li className="flex gap-2 items-end md:text-lg">
          <div className="bg-white rounded-full flex items-center justify-center p-2">
            <BsTelephoneFill size={18} className="text-red-600" />
          </div>
          <span className="text-white">Toll free 1800 200 1234</span>
        </li>

        <li className="flex gap-2 items-end md:text-lg">
          <div className="bg-white rounded-full flex items-center justify-center p-[0.2rem]">
            <TfiFacebook size={28} className="text-red-600" />
          </div>
          <a
            href="http://www.facebook.com/cripumps"
            className="hover:text-gray-300 text-white"
          >
            www.facebook.com/cripumps
          </a>
        </li>
        <li className="flex gap-2 items-center  md:text-lg">
          <div className=" rounded-full flex items-center justify-center p-2">
            <FaGlobe className="text-white" size={32} />
          </div>
          <a
            href="http://www.crigroups.com"
            className="hover:text-gray-300 text-white"
          >
            www.crigroups.com
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
