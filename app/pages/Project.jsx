"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TbArrowRight, TbBrandGithub, TbExternalLink } from "react-icons/tb";

export default function Portfolio() {
  const projects = [
    {
      title: "Swasthya Saadhna",
      description:
        "AI-powered health assistant addressing accessibility gaps. It blends modern AI with Ayurvedic principles to offer multilingual consultations, OCR-based prescription tracking, and personalized wellness plans",
      tags: ["AI4Health", "OCR", "Next.js"],
      features: [
        "OCR-based extraction of handwritten prescriptions and time tracking",
        "Multilingual prompt generation using Google Gemini (Hindi, English, Regional)",
        "Smart health tracker for symptom and routine monitoring",
        "Ayurvedic wellness integration with contextual response engine"
      ],
      action: "https://swasthyasaadhna.vercel.app/",
      color: "from-purple-500 to-blue-600",
      github: "https://github.com/Aayush4532/swaasthya-saadhna.git",
      image: "/health.png",
      style: {
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(128, 90, 213, 0.4)",
        background: "linear-gradient(145deg, #a78bfa, #60a5fa)",
        padding: "1.5rem"
      }
    },
    {
      title: "X-Room",
      description:
        "Real-time interview scheduling platform that handles fallback logic, JWT-based access, and ensures smoother coordination between HR and candidates through auto-notifications and socket-based updates.",
      tags: ["Scheduling", "Socket.io", "Next.js"],
      features: [
        "Auto-manages candidate availability, fallback notifications, and no-show handling",
        "JWT-based secure access with time-bound tokens and role-based protection",
        "Real-time updates in interview lobbies via WebSocket connections",
        "Multi-user fallback system for smart redistribution of slots"
      ],
      action: "https://github.com/Aayush4532/X-Room.git",
      color: "from-sky-500 to-indigo-500",
      github: "https://github.com/Aayush4532/X-Room.git",
      image: "/xroom.png",
      style: {
        objectFit: "cover",
        objectPosition: "center 75px",
        borderRadius: "0.75rem",
        padding: "0.5rem",
        backgroundColor: "#0f172a",
        boxShadow: "0 0 20px rgba(0, 255, 153, 0.25)",
      }
    },
    {
      title: "CodeNation Platform",
      description:
        "Full-stack online coding platform with real-time execution, multi-language support, and role-based access — designed to simulate platforms like LeetCode with added admin-level insights.",
      tags: ["Full-Stack", "Judge0", "Role-Based Auth"],
      features: [
        "Real-time code execution in multiple languages with test case validation",
        "Judge0 API integration for secure and scalable code evaluation",
        "AI-powered hints and embedded video explainers for better learning",
        "Robust JWT-based role management with rate-limiting and input sanitization",
        "Admin panel for monitoring users and managing the question bank"
      ],
      action: "https://code-nation-client.vercel.app/",
      color: "from-purple-500 to-fuchsia-500",
      github: "https://github.com/Aayush4532/CodeNation.git",
      image: "/codenation.png",
      style: {
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(192, 38, 211, 0.4)",
        background: "linear-gradient(145deg, #a855f7, #e879f9)",
        padding: "1.5rem"
      }
    }
  ]


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="work"
      className="relative bg-gradient-to-b from-[#0c1120] to-[#0a0f1a] text-gray-100 py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1a2b]/70 via-[#0c1120] to-[#0a0f1a]"></div>

      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7 + 0.1,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>


      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/5 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            Portfolio
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore my latest work showcasing innovative solutions and creative
            designs
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-200 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-800/50 hover:bg-cyan-600/30 p-2 rounded-full transition-colors">
                      <a href={project.github}><TbBrandGithub className="text-xl cursor-pointer" /></a>
                    </button>
                    <button className="bg-gray-800/50 hover:bg-purple-600/30 p-2 rounded-full transition-colors">
                      <a href={project.action}><TbExternalLink className="text-xl cursor-pointer" /></a>
                    </button>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-gray-300 font-semibold mb-2">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.action}
                  className={`inline-flex items-center bg-gradient-to-r ${project.color} text-white font-medium py-2 px-6 rounded-full transition-all hover:shadow-lg hover:scale-[1.03] group-hover:shadow-cyan-500/30`}
                >
                  Explore Details
                  <TbArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>


              <div className="relative h-64 overflow-hidden border-t border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="mb-4">
                      <div className="inline-block bg-gray-700 rounded-lg px-4 py-2 mb-3">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-lg">Project Preview</div>
                    <div className="text-gray-600 mt-2">
                      <img src={project.image} alt="" style={project.style} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href={"https://github.com/Aayush4532"}>
            <button className="inline-flex cursor-pointer items-center justify-center border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              View All Projects
              <TbArrowRight className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}