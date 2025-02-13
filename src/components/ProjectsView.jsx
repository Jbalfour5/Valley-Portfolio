import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaTh, FaThList } from "react-icons/fa"; // Import React Icons

const ProjectsView = () => {
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' or 'grid'

  const projects = [
    {
      id: 1,
      title: "Flurrie's Hurry For Snowman",
      description: "Cozy Winter Jam 2025 game submission made in a team of 3. Placed 34th out of 166 submissions.",
      image: "images/FlurryHurry.png",
      techstack: [
        { name: "Godot + GDScript", icon: "images/GDIcon.svg" },
        { name: "Github", icon: "images/GithubIcon.png" },
        { name: "Pixilart", icon: "images/pixilartIcon.png" },
        { name: "Blender", icon: "images/blenderIcon.png" },
      ],
      link: "https://itch.io/jam/cozy-winter-jam-2025/rate/3275731",
    },
    {
      id: 2,
      title: "UrbanEx",
      description: "A web app designed to alert locals about incidents and encourage urban explorers to travel in the safest area they can.",
      image: "images/urbanex.png",
      techstack: [
        { name: "HTML5", icon: "images/HTML5Icon.svg" },
        { name: "CSS", icon: "images/CSSIcon.png" },
        { name: "Javascript", icon: "images/JsIcon.png" },
        { name: "Bootstrap", icon: "images/BootstrapIcon.svg" },
        { name: "Firebase", icon: "images/FirebaseICon.webp" },
      ],
      link: "https://comp1800-bby26-c2ceb.web.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showing off my projects and skills, you're on it right now :)",
      image: "images/portfolio.png",
      techstack: [
        { name: "HTML5", icon: "images/HTML5Icon.svg" },
        { name: "React", icon: "images/ReactIcon.png" },
        { name: "TailwindCSS", icon: "images/TailwindIcon.png" },
        { name: "FramerMotion", icon: "images/framerIcon.webp" },
        { name: "Swiper", icon: "images/swipericon.svg" },
      ],
      link: "#",
    },
  ];

  return (
    <div className="py-8 bg-zinc-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-50">My Projects</h2>
          <div className="flex gap-2">
            {/* Carousel View Button */}
            <button
              onClick={() => setViewMode("carousel")}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                viewMode === "carousel"
                  ? "bg-orange-600 text-zinc-50" // Active state
                  : "bg-zinc-700 text-zinc-400 hover:bg-zinc-600" // Inactive state
              }`}
              title="Switch to Carousel View"
            >
              <FaThList className="text-xl" />
            </button>
            {/* Grid View Button */}
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                viewMode === "grid"
                  ? "bg-orange-600 text-zinc-50" // Active state
                  : "bg-zinc-700 text-zinc-400 hover:bg-zinc-600" // Inactive state
              }`}
              title="Switch to Grid View"
            >
              <FaTh className="text-xl" />
            </button>
          </div>
        </div>
        {viewMode === "carousel" ? (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: false }}
    >
      <div className="w-full p-2 flex items-center justify-center">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="w-full p-2 flex flex-col justify-between">
        <div>
          <motion.h3
            className="text-lg font-semibold text-zinc-50"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-sm text-zinc-400 mt-2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {project.description}
          </motion.p>
          <div className="mt-4">
            <p className="text-sm text-zinc-400 mb-2">Techstack:</p>
            <div className="flex gap-2">
              {project.techstack.map((tech, index) => (
                <motion.img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6"
                  title={tech.name}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: false }}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-orange-600 text-zinc-50 rounded-lg hover:bg-orange-700 transition-colors w-full text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectsView;