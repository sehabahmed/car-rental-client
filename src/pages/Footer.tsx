import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" shadow-md rounded-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <div className="flex justify-center sm:justify-between gap-[30px] w-xl flex-wrap">
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Service
          </p>
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Features
          </p>
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Our Team
          </p>
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Portfolio
          </p>
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Blog
          </p>
          <p className="text-[0.9rem] text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
            Contact Us
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-[10px] text-[#424242]">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-[#424242] hover:bg-[#3B9DF8] transition-all duration-300">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-[#424242] hover:bg-[#3B9DF8] transition-all duration-300">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-[#424242] hover:bg-[#3B9DF8] transition-all duration-300">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-[#424242] hover:bg-[#3B9DF8] transition-all duration-300">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32"></div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-center w-full">
        <p className="text-[0.9rem] text-[#424242]">© 2025 All Rights Reserved</p>
      </div>

      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="background/image"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background/image"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
    </footer>
  );
};

export default Footer;
