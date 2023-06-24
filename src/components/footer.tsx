import { CiMail } from "react-icons/ci";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = ({}) => {
  return (
    <footer className="w-full mt-8 mb-0  px-2 flex flex-col items-center justify-center bg-light-black border-t-2 border-zinc-700 text-light-grey text-[2.2vmin] mx-auto">
      <div className="sm:w-2/4 flex flex-wrap gap-x-2 px-3 justify-center items-center flex-shrink-0 -mb-4">
        <img className="sm:m-1 -m-1" src="./Assets/cu.png" alt="CU-logo" />
        <img
          className="sm:m-1 -m-1"
          src="/Assets/Tech_1.png"
          alt="techinvent-logo"
        />
        {/* <img
          className="sm:m-1 -m-1"
          src="/Assets/qs.png"
          alt="techinvent-logo"
        />
        <img
          className="sm:m-1 -m-1"
          src="./Assets/naac.png"
          alt="techinvent-logo"
        /> */}
      </div>
      <div className="flex flex-col mt-2 sm:mt-0 items-center justify-center">
          <p className="sm:text-lg hover:text-white mt-2">
            ©️TechInvent x Chandigarh University
          </p>
        {/* <p className="m-2">For further information Email us at techinvent2023@cumail.in</p> */}
        <div className="flex flex-wrap items-center gap-x-3 justify-center">
          <a href="#" className="m-1">
            <i className="p-1 text-sm sm:text-xl fa-solid fa-envelope hover:text-white"></i>
          </a>
          <a href="techinvent2023@cumail.in">
            <CiMail className=" w-6 h-6  hover:text-white" />
          </a>
          <a href="6264483021" className="m-1">
            <BsFillTelephoneFill className=" w-5 h-5  hover:text-white" />
          </a>
          <a
            href="https://instagram.com/techinvent.cu?igshid=NGExMmI2YTkyZg=="
            className="m-1"
          >
            <AiFillInstagram className=" w-6 h-6  hover:text-white" />
          </a>

          <a href="https://www.linkedin.com/showcase/cu-tech-invent/?originalSubdomain=in" className="m-1">
            <AiFillLinkedin className=" w-6 h-6  hover:text-white" />
          </a>
          <a href="#" className="m-1">
            <i className="p-1 text-sm sm:text-xl fa-brands fa-linkedin hover:text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
