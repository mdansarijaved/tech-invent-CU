import Script from "next/script";

const Navbar = ({ toggleForm }: { toggleForm: () => void }) => {
  return (
    <>
      <Script src="/menu.js" />
      <header className="bg-dark-black fixed z-50 w-full py-3 h-16  lg:h-[12vmin] flex justify-between items-center px-[8vmin]">
        <div className="logo flex flex-row justify-center items-center space-x-4">
          <a href="http://techinvent.cuchd.in/index.php"><img className=" w-24 lg:w-32 space-y-12  " src="./Assets/11.png" alt="CU-logo" /></a>
          <img
            className=" w-20 lg:w-28  "
            src="./Assets/Tech_1.png"
            alt="techinvent-logo"
          />
          {/* <img
            className="w-28 hidden lg:block"
            src="./Assets/10.png"
            alt="naac-logo"
          />
          <img
            className="w-28 hidden xl:block"
            src="./Assets/9.png"
            alt="qs-logo"
          /> */}
          {/* <!-- <img src="./img/logo.png" alt="logo" className="w-[10vmin] h-[10vmin] mx-[2vmin]" /> */}
          {/* <img src="./img/logo.png" alt="logo" className="w-[10vmin] h-[10vmin] mx-[2vmin]" /> --> */}
        </div>
        <div className="lg:hidden h-6 w-6" id="menu-btn">
          <img src="./Assets/menu.png" alt="menu" className="" />
        </div>
        <div className="nav hidden lg:flex flex-row justify-center items-center">
          <a
            href="#about-us"
            className="text-[2vmin] text-light-grey  hover:text-white transition-all no-underline mx-[2vmin] cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#roles-and-responsibility"
            className="text-[2vmin] text-light-grey hover:text-white transition-all no-underline mx-[2vmin] cursor-pointer"
          >
            Roles and Responsibilities
          </a>
          <a
            href="#faq"
            className="text-[2vmin] text-light-grey hover:text-white transition-all no-underline mx-[2vmin] cursor-pointer"
          >
            FAQ
          </a>
          <button
            className="text-[2vmin] bg-white py-1 px-5 rounded  transition-all no-underline mx-[2vmin] cursor-pointer"
            onClick={toggleForm}
          >
            Register
          </button>
        </div>
      </header>
      <div
        className="h-screen w-screen fixed hidden top-0 translate-x-full z-50 bg-dark-black"
        id="menu"
      >
        <p
          className="text-3xl rounded-xl w-fit bg-dark-black backdrop-blur-sm text-white py-5 px-7"
          id="menuClose"
        >
          X
        </p>
        <ul className="h-full w-full flex flex-col justify-start pt-44 items-center gap-10 md:gap-16 md:text-4xl text-xl text-white">
          <a href="#about-us" className="close-menu">
            About us
          </a>
          <a href="#roles-and-responsibility" className="close-menu">
            Roles and Responsibilities
          </a>
          <a href="#faq" className="close-menu">
            FAQ
          </a>

          <button onClick={toggleForm}>Register</button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
