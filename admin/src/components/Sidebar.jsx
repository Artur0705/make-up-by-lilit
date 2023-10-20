import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && !isOpen) {
        setIsOpen(true);
      } else if (window.innerWidth < 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
    desktop: { x: 0 },
  };

  return (
    <div className="relative md:static">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 bg-gray-700 absolute top-0 left-0 z-20"
      >
        <GiHamburgerMenu className="h-6 w-6" />
      </button>

      <motion.aside
        className="bg-gray-800 text-white w-64 min-h-screen p-4 absolute md:relative transition-all duration-300 ease-in-out z-10"
        initial={window.innerWidth >= 768 ? "desktop" : "closed"}
        animate={
          isOpen ? "open" : window.innerWidth >= 768 ? "desktop" : "closed"
        }
        variants={sidebarVariants}
      >
        <ul>
          <li className="mb-2">
            <Link to="/admin" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="admin/services"
              className="text-white hover:text-gray-300"
            >
              Services
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="admin/portfolio"
              className="text-white hover:text-gray-300"
            >
              Portfolio
            </Link>
          </li>
          <li className="mb-2">
            <Link to="admin/contact" className="text-white hover:text-gray-300">
              Enquiries
            </Link>
          </li>
          <li className="mb-2">
            <Link to="admin/faq" className="text-white hover:text-gray-300">
              FAQ
            </Link>
          </li>
          <li className="mb-2">
            <Link to="admin/test" className="text-white hover:text-gray-300">
              Test Page
            </Link>
          </li>
        </ul>
      </motion.aside>

      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
