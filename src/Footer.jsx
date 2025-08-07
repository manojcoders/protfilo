import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa"; // You can use react-icons for other platforms

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 text-white max-h-screen" style={{ backgroundColor: "oklch(20.8% 0.042 265.755)" }}>
      
      {/* text */}
      <div className="flext mx-20 items-center">
        
      </div>
    

      {/* Right side: Empty for now */}
      <div>
          <div className="flex items-center gap-4 mx-20 ">
        <a href="https://www.instagram.com/im_manoj_06/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-5 w-5 hover:text-pink-400" />
        </a>
       <a href="mailto:kandhulamanojkumar663@gmail.com"  aria-label="Send Email"  title="Send Email" className="inline-flex items-center">
         <EnvelopeIcon className="h-5 w-5 text-gray-400 hover:text-blue-300  " />
        </a>

        <a href="https://github.com/manojcoders" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-5 w-5 hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-5 w-5 hover:text-blue-300" />
        </a>
        <a href="tel:+91 9491779518">
          <PhoneIcon className="h-5 w-5 hover:text-green-400" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Footer;

