"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-cyan-600 text-white w-full justify-between px-4 items-center sticky top-0 z-50 md:py-4 py-2 shadow-md text-2xl">
      <div>
        <Link href="/">
          <img
            className="mask mask-circle md:h-12 h-8 hover:opacity-80 transition duration-300"
            src="/jflogo.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#about"
              className="hover:bg-cyan-500 rounded-badge py-2 px-4 transition duration-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:bg-cyan-500 rounded-badge py-2 px-4 transition duration-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="hover:bg-cyan-500 rounded-badge py-2 px-4 transition duration-700"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:bg-cyan-500 rounded-badge py-2 px-4 transition duration-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none px-2 py-1"
        >
          {isOpen ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-2 bg-slate-700 rounded shadow-md md:hidden p-4 w-1/2 opacity-75">
          <ul className="flex flex-col space-y-1 p-2">
            <li>
              <Link
                href="#about"
                className="block px-4 py-2 hover:bg-cyan-500 transition duration-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block px-4 py-2 hover:bg-cyan-500 transition duration-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block px-4 py-2 hover:bg-cyan-500 transition duration-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block px-4 py-2 hover:bg-cyan-500 transition duration-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
