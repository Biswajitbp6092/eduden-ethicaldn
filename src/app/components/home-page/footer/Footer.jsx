import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/assets/footer-img.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-8 lg:px-[90px] pt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <img
            src="/assets/eduden-logo.png"
            className="w-[120px] lg:w-[180px] h-auto cursor-pointer"
            alt="Eduden Logo" 
          />
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4 mt-2 text-green-400 text-xl">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  className="p-2 rounded-full bg-yellow-400 text-black cursor-pointer transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_#ca8a04]"
                  href="#"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="ml-[0px] md:ml-[100px]">
          <h2 className="text-lg font-semibold pb-2 lg:pb-6">Quick Link</h2>
          <div className="space-y-2 text-sm">
            <a
              href="#"
              className="hover:text-yellow-400 flex items-center gap-1 font-semibold"
            >
              <IoMdArrowDropright size={22} /> Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 flex items-center gap-1 font-semibold"
            >
              <IoMdArrowDropright size={22} /> About
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 flex items-center gap-1 font-semibold"
            >
              <IoMdArrowDropright size={22} /> Courses
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 flex items-center gap-1 font-semibold"
            >
              <IoMdArrowDropright size={22} /> Contact
            </a>
          </div>
        </div>

        {/* Learning Platform */}
        <div className="text-white w-fit ml-[0px] xl:ml-[100px]">
          <h2 className="text-xl font-semibold pb-2 lg:pb-6">Learning platform</h2>
          <div className="space-y-4 text-base">
            <a href="#" className="flex items-center space-x-3">
              <span className="bg-yellow-400 text-black p-1.5 rounded-full text-base">
                <FaYoutube />
              </span>
              <span className="font-semibold">YouTube</span>
            </a>
            <a href="#" className="flex items-center space-x-3">
              <span className="bg-yellow-400 text-black p-1.5 rounded-full text-base">
                <FaFacebookF />
              </span>
              <span className="font-semibold">Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-3">
              <span className="bg-yellow-400 text-black p-1.5 rounded-full text-base">
                <FaInstagram />
              </span>
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col ml-1 md:ml-[100px]">
          <h2 className="text-lg font-semibold pb-2 lg:pb-6">Get In Touch</h2>
          <div className="text-sm space-y-3">
            <p className="cursor-pointer">
              <span className="font-semibold">Phone:</span>
              <br />
              01745349414
            </p>
            <p className="cursor-pointer">
              <span className="font-semibold">Email:</span>
              <br />
              bd@eduden.com
            </p>
            <p className="cursor-pointer">
              <span className="font-semibold">Location:</span>
              <br />
              Dhaka, kollanpur, bridge er niche.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        Copyright © 2024 Edu Den Powered by{" "}
        <a href="#" className="text-yellow-400 hover:underline">
          Ethical Den
        </a>
      </div>
    </footer>
  );
}
