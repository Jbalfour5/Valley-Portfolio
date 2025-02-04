import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // State for contact form modal

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1842d118-7375-4ede-aca5-3092772dafef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
      setContactOpen(false); // Close the modal on success
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-custom">
          {/* Logo Section */}
          <h1>
            <a href="/" className="logo">
              <img src=" " alt="Valley Balfour" width={40} height={40} />
            </a>
          </h1>

          {/* Navbar Section */}
          <div className="relative md:justify-self-center">
            <button
              className="menu-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} />
          </div>

          {/* Contact Me Button */}
          <motion.button
            onClick={() => setContactOpen(true)}
            className="btn btn-secondary max-md:hidden md:justify-self-end"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layoutId="contact-button" // Add layoutId for animation
          >
            Contact Me
          </motion.button>
        </div>
      </header>

      {/* Pop-Out Contact Form */}
      <AnimatePresence>
        {contactOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end pr-5 bottom-48 z-50">
            <motion.div
              className="bg-zinc-800 p-6 rounded-lg w-full max-w-lg outline"
              initial={{ opacity: 0, scale: 0.9, x: 100 }} // Initial animation state
              animate={{ opacity: 1, scale: 1, x: 0 }} 
              exit={{ opacity: 0, scale: 0.9, x: 100 }} 
              transition={{ duration: 0.3 }}
              layoutId="contact-modal" // Add layoutId for animation
            >
              <h2 className="text-2xl font-bold text-zinc-50 mb-6">Contact Me</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-zinc-700 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  rows="5"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-orange-600 text-zinc-50 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={() => setContactOpen(false)}
                className="mt-4 text-zinc-400 hover:text-zinc-50"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;