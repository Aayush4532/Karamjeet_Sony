"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

const HolographicCard = ({ imageUrl = "/avatar.webp" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  // Handle mouse movement for 3D effect and light position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const relativeX = e.clientX - centerX;
      const relativeY = e.clientY - centerY;

      setRotateY(relativeX / 20);
      setRotateX(-relativeY / 20);

      // Calculate light position percentage
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setLightPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        background: `
          radial-gradient(
            circle at ${lightPosition.x}% ${lightPosition.y}%,
            rgba(30, 30, 40, 0.8) 0%,
            rgba(15, 15, 25, 0.9) 70%
          ),
          linear-gradient(
            135deg,
            rgba(25, 25, 35, 0.9) 0%,
            rgba(10, 10, 20, 1) 100%
          )
        `,
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.7)",
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric Shapes Animation */}
      <div className="absolute inset-0">
        {/* Floating Triangles */}
        {[10, 30, 70, 90].map((pos, i) => (
          <motion.div
            key={`tri-${i}`}
            className="absolute w-8 h-8 opacity-10"
            style={{
              top: `${pos}%`,
              left: `${(i * 25) % 100}%`,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "rgba(100, 150, 255, 0.2)",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing Circles */}
        {[20, 50, 80].map((pos, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-gray-600"
            style={{
              top: `${pos}%`,
              left: `${(i * 30 + 10) % 100}%`,
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Light Reflection Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${lightPosition.x}% ${lightPosition.y}%,
            rgba(255, 255, 255, 0.02) 0%,
            transparent 80%
          )`,
        }}
      />

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute rounded-full bg-blue-500 blur-xl"
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "40%",
            left: "50%",
            width: "200px",
            height: "200px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Profile Image with Glass Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="relative w-72 h-72 rounded-full overflow-hidden">
          {/* Glass Border */}
          <div
            className="absolute inset-0 backdrop-blur-sm border border-gray-600 rounded-full shadow-lg"
            style={{ boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)" }}
          />

          {/* Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt="Karamjeet Sony"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function HeroSectionPremium() {
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = useMemo(() => ["web app", "backend"], []);
  const [currentText, setCurrentText] = useState(skills[0]);

  useEffect(() => {
    const runAnimations = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
      setIsLoaded(true);
    };

    runAnimations();
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = skills.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [skills]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2360a5fa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient Blob */}
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(124, 58, 237, 0.5) 50%, transparent 70%)",
        }}
      />

      <div className="w-[90%] mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.span
            className="inline-block px-5 py-2 bg-black rounded-full text-sm font-semibold text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-400">Innovative</span> Developer &
            Designer
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hey, I'm Karamjeet Sony
            </span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-gray-300 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I build{" "}
            <span className="text-white text-2xl font-serif">
              <span
                className="transition-all duration-500 ease-in-out"
                style={{
                  animation: "fadeInOut 1.5s infinite",
                  animationDelay: "0s",
                }}
              >
                {currentText}
              </span>
            </span>{" "}
            with clean, scalable code and creative vision
            <br />
            —turning ideas into
            reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-white rounded-full text-base font-medium transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.span
              className="px-6 py-3 bg-green-900/30 text-green-400 border border-green-700 rounded-full text-sm font-medium flex items-center gap-2"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(72, 187, 120, 0)",
                  "0 0 15px rgba(72, 187, 120, 0.5)",
                  "0 0 5px rgba(72, 187, 120, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.span>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 justify-center lg:justify-start pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://github.com/Aayush4532"
              aria-label="GitHub"
              className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-all duration-300 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub className="text-2xl text-gray-300 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full border border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/karamjeet-sony"
              aria-label="LinkedIn"
              className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-all duration-300 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin className="text-2xl text-gray-300 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full border border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </motion.a>
            <motion.a
              href="https://twitter.com/karamjeet11"
              aria-label="Twitter"
              className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-all duration-300 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter className="text-2xl text-gray-300 group-hover:text-white" />
              <div className="absolute inset-0 rounded-full border border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Holographic Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <HolographicCard imageUrl="/avatar.webp" />
        </motion.div>
      </div>

      {/* SCROLL DOWN */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1, color: "#60a5fa" }}
      >
        <span className="text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Explore More
          </motion.span>
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
