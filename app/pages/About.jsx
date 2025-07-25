"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TbUser, TbBriefcase, TbSchool, TbTools } from 'react-icons/tb';

const TABS = [
  { id: 'story', label: 'My Story', icon: <TbUser size={20} /> },
  { id: 'experience', label: 'Experience', icon: <TbBriefcase size={20} /> },
  { id: 'education', label: 'Education', icon: <TbSchool size={20} /> },
  { id: 'skills', label: 'Skills', icon: <TbTools size={20} /> }
];

const skillCategories = {
  Frontend: ['React', 'Next.js', 'Shadcn', 'Tailwind CSS', 'Framer-Motion', 'Recoil', 'Tanstack Query'],
  Backend: ['Node.js', 'Express.js', 'NPM'],
  'DB & Services': ['Postgres', 'Docker', 'Supabase', 'Prisma ORM', 'Postman', 'MongoDB'],
  'Workflow Stack': ['Git', 'GitHub', 'Figma', 'Framer', 'Brave', 'ChatGPT', 'Claude', 'Lovable'],
  'Currently Learning': ['Rust']
};

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id='about' className="relative bg-gradient-to-b from-black to-[#0f1a2b] text-gray-100 min-h-screen py-10 md:py-16 px-4 sm:px-6 overflow-hidden flex items-center">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }} />

      {/* Decorative Blobs - Adjusted for mobile */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/5 w-40 h-40 md:w-80 md:h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="relative mx-auto flex flex-col lg:flex-row w-full max-w-6xl gap-8 lg:gap-12 mt-10 md:mt-15">
        {/* Left: Sticky 16:9 Video - Mobile-first adjustments */}
        <div className="w-full lg:w-[45%] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl aspect-video"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,219,222,0.3)] md:shadow-[0_0_40px_rgba(0,219,222,0.3)]">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/video-poster.jpg"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent" style={{
                background: 'linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)',
                boxShadow: 'inset 0 0 10px rgba(0,219,222,0.5), 0 0 15px rgba(0,219,222,0.3)'
              }} />

              {/* Corner Accents - Smaller on mobile */}
              <div className="absolute top-0 left-0 w-10 h-10 md:w-16 md:h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-10 h-10 md:w-16 md:h-16 border-t-2 border-r-2 border-purple-500 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 md:w-16 md:h-16 border-b-2 border-l-2 border-purple-500 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 md:w-16 md:h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />
            </div>
          </motion.div>
        </div>

        {/* Right: Tabs Content */}
        <div className="w-full lg:w-[55%]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >About Me</motion.h1>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="bg-transparent border-b border-gray-700 justify-start overflow-x-auto">
              {TABS.map(tab => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="relative cursor-pointer flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base text-gray-400 data-[state=active]:text-white hover:text-white transition-colors"
                >
                  {tab.icon}
                  <span className="whitespace-nowrap">{tab.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-white transition-opacity ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'}`}
                  />
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Responsive height container */}
            <div className="mt-4 md:mt-6 min-h-[320px] md:min-h-[420px] lg:min-h-[552px]">
              {/* Story Tab */}
              <TabsContent value="story">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="bg-[#1a2433] backdrop-blur-md bg-opacity-60 border border-gray-700 shadow-xl md:shadow-2xl hover:scale-[1.01] md:hover:scale-[1.02] transform transition-transform h-full">
                    <CardContent className="h-full flex flex-col py-4 md:py-6">
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-300">My Story</h2>
                      <div className="space-y-3 md:space-y-4 flex-grow">
                        <div className="text-sm md:text-base leading-relaxed">
                          <p>
                            I’m a developer who finds joy in building
                            <span className="text-cyan-300 font-medium"> meaningful tech</span>. <br />
                            I naturally gravitate towards the
                            <span className="text-cyan-300 font-medium"> backend</span> — designing systems, writing clean logic, and making things work at scale. <br />
                            At the same time, I care deeply about
                            <span className="text-cyan-300 font-medium"> user experience</span> and enjoy crafting clean, intuitive interfaces when needed. <br />
                            What drives me isn’t just technology — it’s the
                            <span className="text-cyan-300 font-medium"> impact</span>. I believe in using my skills to solve real problems, support communities, and create tools that make a difference in people’s lives.
                          </p>
                          <p>
                            My journey began early — shaped by observing life closely and learning to find joy in limited resources. <br />
                            Growing up around struggle made me more aware, and that empathy still drives me. <br />
                            In 2023, I got the opportunity to pursue
                            <span className="text-cyan-300 font-medium"> Computer Science</span>, where I discovered full stack development and found my way into the world of code and creation.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Experience Tab */}
              <TabsContent value="experience">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="bg-[#1a2433] backdrop-blur-md bg-opacity-60 border border-gray-700 shadow-xl md:shadow-2xl hover:scale-[1.01] md:hover:scale-[1.02] transform transition-transform h-full">
                    <CardContent className="h-full flex flex-col py-4 md:py-6">
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-300">Experience</h2>
                      <ul className="space-y-3 md:space-y-4 flex-grow">
                        {/* <li className="border-l-2 border-cyan-500 pl-3 md:pl-4 py-1">
                          <div className="text-cyan-300 text-sm md:text-base">Oct–Dec 2024</div>
                          <div className="font-bold text-base md:text-lg">Frontend Developer Intern at MythyaVerse</div>
                          <p className="text-gray-300 mt-1 text-sm md:text-base">Built and redesigned VRPlaced's user interface using React, Next.js, and Tailwind CSS</p>
                        </li>
                        <li className="border-l-2 border-purple-500 pl-3 md:pl-4 py-1">
                          <div className="text-cyan-300 text-sm md:text-base">2022–2024</div>
                          <div className="font-bold text-base md:text-lg">Student Developer at UEMK</div>
                          <p className="text-gray-300 mt-1 text-sm md:text-base">Led college hackathon team, mentoring peers in web development and UI/UX design</p>
                        </li> */}
                        <li className="border-l-2 border-cyan-500 pl-3 md:pl-4 py-1">
                          <div className="font-bold text-base md:text-lg">Freelance Projects</div>
                          <p className="text-gray-300 mt-1 text-sm md:text-base">Developed portfolio sites and small apps for clients using modern web technologies</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="bg-[#1a2433] backdrop-blur-md bg-opacity-60 border border-gray-700 shadow-xl md:shadow-2xl hover:scale-[1.01] md:hover:scale-[1.02] transform transition-transform h-full">
                    <CardContent className="h-full flex flex-col py-4 md:py-6">
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-300">Education</h2>
                      <div className="flex-grow space-y-4 md:space-y-6">
                        <div className="border-l-2 border-cyan-500 pl-3 md:pl-4 py-1">
                          <div className="font-bold text-base md:text-lg">B.Tech in Computer Science & Engineering</div>
                          <div className="text-cyan-300 text-sm md:text-base">Delhi Technological University</div>
                          <div className="text-gray-300 text-sm md:text-base">2023 – 2027</div>
                          <p className="mt-2 text-gray-300 text-sm md:text-base">Specialized in web technologies and UI/UX design. Participated in multiple hackathons and tech events.</p>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-3 md:pl-4 py-1">
                          <div className="font-bold text-base md:text-lg">12th CBSE</div>
                          <div className="text-cyan-300 text-sm md:text-base">GBSSS-Nithari</div>
                          <div className="text-gray-300 text-sm md:text-base">2020 – 2022</div>
                          <p className="mt-2 text-gray-300 text-sm md:text-base">Focus on physics and mathematics. Developed foundational programming skills.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  <Card className="bg-[#1a2433] backdrop-blur-md bg-opacity-60 border border-gray-700 shadow-xl md:shadow-2xl hover:scale-[1.01] md:hover:scale-[1.02] transform transition-transform h-full">
                    <CardContent className="h-full flex flex-col py-4 md:py-6">
                      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-cyan-300">Skills</h2>
                      <div className="space-y-4 md:space-y-6 flex-grow">
                        {Object.entries(skillCategories).map(([category, skills]) => (
                          <div key={category}>
                            <h3 className="font-medium text-base md:text-lg text-purple-300 mb-2 md:mb-3 flex items-center">
                              <span className="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full mr-2"></span>
                              {category}
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {skills.map(skill => (
                                <span
                                  key={skill}
                                  className="bg-gradient-to-r from-cyan-700/40 to-purple-700/40 text-cyan-200 px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm backdrop-blur-sm border border-cyan-500/20 shadow"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @media (max-width: 768px) {
          .animate-blob {
            animation: blob 10s infinite;
          }
        }
      `}</style>
    </section>
  );
}