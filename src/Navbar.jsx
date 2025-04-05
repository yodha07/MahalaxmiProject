import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fae8cd] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-3xs drop-shadow-md hover:-translate-y-1 transition rounded-md shadow"
        />

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-[#7b3f30] text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-[#7b3f30] font-medium">
          <li className="drop-shadow-md hover:cursor-pointer">Home</li>
          <li className="drop-shadow-md hover:cursor-pointer">About us</li>
          <li>
            <button className="bg-orange-300 text-[#7b3f30] font-semibold px-4 py-1 rounded-md shadow transition transform hover:-translate-y-1 hover:bg-orange-400 cursor-pointer ease-out">
              Contact us
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-[#7b3f30] font-medium">
            <li className="drop-shadow-md hover:cursor-pointer">Home</li>
            <li className="drop-shadow-md hover:cursor-pointer">About us</li>
            <li>
              <button className="bg-orange-300 text-[#7b3f30] font-semibold px-4 py-1 rounded-md shadow transition transform hover:-translate-y-1 hover:bg-orange-400 cursor-pointer ease-out w-full text-left">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
