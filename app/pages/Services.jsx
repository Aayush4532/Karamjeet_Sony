"use client";
import { motion } from 'framer-motion';
import { TbDeviceDesktop, TbDeviceMobile, TbPalette, TbLayout } from 'react-icons/tb';

export default function Services() {
  const services = [
    {
      icon: <TbDeviceDesktop className="text-cyan-400 text-3xl" />,
      title: "Web Apps",
      description: "Creating responsive, user-friendly websites and web applications with modern frameworks and cutting-edge technologies."
    },
    {
      icon: <TbDeviceMobile className="text-purple-400 text-3xl" />,
      title: "Mobile Apps",
      description: "Designing beautiful user interfaces with attention to detail, focusing on both aesthetics and functionality for seamless experiences."
    },
    {
      icon: <TbPalette className="text-amber-400 text-3xl" />,
      title: "Backend Development",
      description: "Developing unique brand identities that communicate values and connect with target audiences effectively across all platforms."
    },
    {
      icon: <TbLayout className="text-emerald-400 text-3xl" />,
      title: "UI/UX Design",
      description: "Creating intuitive product designs that solve real problems and deliver exceptional user experiences through thoughtful interactions."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id='services' className="relative bg-gradient-to-b from-[#0c1120] to-[#0a0f1a] text-gray-100 py-24 px-6 overflow-hidden">
      {/* Background with seamless transition */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1a2b]/70 via-[#0c1120] to-[#0a0f1a]"></div>
      
      {/* Starfield Background */}
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
      
      {/* Decorative Blobs */}
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
            Service
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
          >
            How Can I Help?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            I specialize in creating digital experiences that blend creativity with functionality to solve real-world problems
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8 shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="flex items-start mb-5">
                <div className="bg-gray-800/50 p-3 rounded-lg mr-4 group-hover:bg-gradient-to-br group-hover:from-cyan-700/30 group-hover:to-purple-700/30 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-200 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400/50 transition-all" />
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-purple-400/20 group-hover:bg-purple-400/50 transition-all" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-cyan-400/20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-amber-400/10 animate-pulse" />
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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