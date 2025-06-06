"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({});

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    {
      name: "Courses",
      submenu: [
        { name: "Courses1", href: "#" },
        { name: "Courses2", href: "#" },
        { name: "Courses3", href: "#" },
        { name: "Courses4", href: "#" },
      ],
    },
    {
      name: "Whats New",
      submenu: [
        { name: "Whats New1", href: "#" },
        { name: "Whats New2", href: "#" },
        { name: "Whats New3", href: "#" },
        { name: "Whats New4", href: "#" },
      ],
    },
    { name: "Verify", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full bg-black shadow fixed top-0 left-0 z-50">
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="assets\eduden-logo.png" className="w-[207px] h[55px] cursor-pointer"></img>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div key={link.name} className="relative group">
                  <button className="flex items-center gap-1 text-white hover:text-yellow-300 font-medium">
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute left-0 top-full mt-4 bg-black shadow-lg rounded w-48 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-white hover:text-yellow-200"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-300 transition font-medium"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Enroll Now Button */}
        <div className="hidden md:flex">
          <Link href="#">
            <button className="bg-transparent text-white w-[140px] h-[40px] rounded-full border cursor-pointer border-yellow-300 hover:bg-yellow-300 hover:text-black transition">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-full bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <img className="w-[150px] h-auto cursor-pointer" src="assets\eduden-logo.png" alt="" />
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={32} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-2 text-lg">
          {navLinks.map((link) => {
            if (link.submenu) {
              return (
                <div key={link.name}>
                  <button
                    onClick={() =>
                      setMobileDropdown((prev) => ({
                        ...prev,
                        [link.name]: !prev[link.name],
                      }))
                    }
                    className="flex justify-between items-center w-full text-left text-white py-2 text-base font-medium text-lg "
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={clsx(
                        "transition-transform",
                        mobileDropdown[link.name] && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={clsx(
                      "ml-2 pl-2 border-l my-2 space-y-3 text-md text-white",
                      !mobileDropdown[link.name] && "hidden"
                    )}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="block hover:text-blue-600"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-600 py-2"
              >
                {link.name}
              </Link>
            );
          })}

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-4 bg-transparent text-white w-full h-[40px] rounded-full border cursor-pointer border-yellow-300 hover:bg-yellow-300 hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
