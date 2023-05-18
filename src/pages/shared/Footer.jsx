import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import logo from '../../../src/assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-primary bg-opacity-20">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 text-center md:text-left md:grid-cols-5 gap-5 py-20 px-5 ml-5">
          <div className="col-span-2 space-y-5">
            <div className="flex items-end">
              <img src={logo} alt="disney palace logo" className="h-16 w-16" />
              <h1 className="font-extrabold text-2xl">Palace</h1>
            </div>
            <div className="my-5 leading-8">
              <p>Office: Nandan Kanan, Chittagong, Bangladesh</p>
              <p>Contact: +880-1833051312</p>
            </div>
            <div>
              <p className="leading-10 font-bold text-lg">Social</p>
              <div className="flex  gap-5 justify-center md:justify-start">
                <IoLogoFacebook className="h-7 w-7" />
                <IoLogoYoutube className="h-7 w-7" />
                <IoLogoTwitter className="h-7 w-7" />
              </div>
            </div>
            <div>
              <span className="text-base">
                © 2023&nbsp;
                <Link
                  href="https://facebook.com/cyasir"
                  className="hover:underline"
                >
                  Disney Palace™
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">About Us</li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Careers
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                News & Blog
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Press Center
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Affiliate & Partners
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Idea & Guides
              </li>
            </ul>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">Services</li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Gift Card
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Mobile App
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Shipping and Delivery
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Order Pickup
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Account Signup
              </li>
            </ul>
          </div>
          <div>
            <ul className=" leading-10 font-normal text-base">
              <li className="font-bold text-lg mb-5">Help</li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Shopcart Helps
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Returns
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Track Orders
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Contact Us
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Feedback
              </li>
              <li className="hover:text-primary hover:font-medium hover:translate-x-5 transition-all duration-200 ">
                Security & Fraud
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
