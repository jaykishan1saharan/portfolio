"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const navItems = ["About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    else {
      document.body.style.overflow = "auto";
    }

  }, [menuOpen]);

  const sendEmail = async () => {

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    try {

      setLoading(true);

      await emailjs.send(
        "service_z0p0y2t",
        "template_376mb64",
        {
          user_name: name,
          user_email: email,
          message: message,
        },
        "4zoWtejhtyA4NX2h2"
      );

      alert("Message Sent Successfully 🚀");

      setName("");
      setEmail("");
      setMessage("");

      setOpenModal(false);

    } catch (error) {

      console.log(error);

      alert("Something went wrong!");

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <nav className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-black/30
border-b
border-cyan-500/10
">

        <div className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-4
sm:px-6
lg:px-8
py-4
">

          {/* LOGO */}
          <a href="#home">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="
  text-4xl
  font-extrabold
  tracking-wide
  inline-block
  "
            ><span
              className="
    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-purple-500
    bg-clip-text
    text-transparent
    animate-rgb
    "
            >
                Portfolio
              </span>
            </motion.h1>
          </a>

          {/* NAV ITEMS */}
          <ul
            className="
hidden
md:flex
gap-10
text-gray-300
items-center
"
          >

            {navItems.map((item, index) => (
              <li key={index} className="relative cursor-pointer group">

                <a
                  href={`#${item.toLowerCase()}`}
                  className="block"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>

                  {/* UNDERLINE */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>

              </li>
            ))}

          </ul>

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
md:hidden
text-white
z-[100]
"
          >
            {
              menuOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )
            }
          </button>

          {/* BUTTON */}
          <motion.button
            onClick={() => setOpenModal(true)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34,211,238,0.6)",
            }}
            className="
hidden
md:block
bg-cyan-500
text-black
px-5
py-2
rounded-xl
font-medium
"
          >
            Let's Talk
          </motion.button>

        </div>

        <AnimatePresence>

          {menuOpen && (

            <>

              <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                onClick={() =>
                  setMenuOpen(false)
                }

                className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
z-40
"
              />

              <motion.div

                initial={{
                  x: "100%"
                }}

                animate={{
                  x: 0
                }}

                exit={{
                  x: "100%"
                }}

                transition={{
                  duration: 0.3
                }}

                className="
fixed
top-0
right-0
h-screen
w-[80%]
max-w-[320px]
bg-[#020617]
border-l
border-cyan-500/20
z-50
flex
flex-col
gap-8
pt-28
px-8
"
              >

                {navItems.map((item, index) => (

                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}

                    onClick={() =>
                      setMenuOpen(false)
                    }

                    className="
text-white
text-xl
hover:text-cyan-400
transition
"
                  >
                    {item}
                  </a>

                ))}

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenModal(true);
                  }}

                  className="
mt-4
bg-cyan-500
text-black
px-5
py-3
rounded-xl
font-medium
"
                >
                  Let's Talk
                </button>

              </motion.div>

            </>

          )}

        </AnimatePresence>

      </nav>

      <AnimatePresence>

        {openModal && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="relative w-[90%] max-w-lg bg-[#0f172a]/90 border border-cyan-400/20 rounded-3xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.2)] overflow-hidden"
            >

              {/* TITLE */}
              <h2 className="text-4xl font-bold text-center mb-3">
                <span className="text-white">Let's</span>{" "}
                <span className="text-cyan-400">Talk</span>
              </h2>

              <p className="text-gray-400 text-center mb-8">
                Let’s build something futuristic together 🚀
              </p>

              {/* FORM */}
              <div>

                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-3xl font-bold text-white">
                    Let's <span className="text-cyan-400">Talk</span>
                  </h2>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-white/60 hover:text-cyan-400 text-2xl"
                  >
                    ✕
                  </button>

                </div>

                {/* NAME */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400"
                />

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mb-6 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400 resize-none"
                />

                {/* SEND BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(34,211,238,0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendEmail}
                  className="w-full bg-cyan-500 text-black py-4 rounded-2xl font-bold text-lg"
                >
                  {loading ? "Sending..." : "Send Message 🚀"}
                </motion.button>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}