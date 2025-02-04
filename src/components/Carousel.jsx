import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Carousel = () => {
  const projects = [
    {
      id: 1,
      title: "Flurrie's Hurry For Snowman",
      description: "Cozy Winter Jam 2025 game submission made in a team of 3. Placed 34th out of 166 submissions.",
      image: "src/Images/FlurryHurry.png", 
      techstack: [
        { name: "Godot + GDScript", icon: "src/Images/GDIcon.svg" },
        { name: "Github", icon: "src/Images/GithubIcon.png" },
        { name: "Pixilart", icon: "src/Images/pixilartIcon.png" },
        { name: "Blender", icon: "src/Images/BlenderIcon.png" },
      ],
      link: "https://itch.io/jam/cozy-winter-jam-2025/rate/3275731",
    },
    {
      id: 2,
      title: "UrbanEx",
      description: "A web app designed to alert locals about incidents and encourage urban explorers to travel in the safest area they can.",
      image: "src/Images/urbanex.png",
      techstack: [
        { name: "HTML5", icon: "src/Images/HTML5Icon.svg" },
        { name: "CSS", icon: "src/Images/CSSIcon.png" },
        { name: "Javascript", icon: "src/Images/JSIcon.png" },
        { name: "Bootstrap", icon: "src/Images/BootstrapIcon.svg" },
        { name: "Firebase", icon: "src/Images/FirebaseICon.webp" },
      ],
      link: "https://comp1800-bby26-c2ceb.web.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showing off my projects and skills, you're on it right now :)",
      image: "src/Images/portfolio.png",
      techstack: [
        { name: "HTML5", icon: "src/Images/HTML5Icon.svg" },
        { name: "React", icon: "src/Images/ReactIcon.png" },
        { name: "TailwindCSS", icon: "src/Images/TailwindIcon.png" },
        { name: "FramerMotion", icon: "src/Images/FramerIcon.webp" },
        { name: "Swiper", icon: "src/Images/swipericon.svg" },
      ],
      link: "#",
    },
  ];

  return (
    <div className="py-8 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">My Projects</h2>
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
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex p-4">
                {/* Image on the left with padding */}
                <div className="w-1/3 p-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Content on the right */}
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {project.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-zinc-400 mt-2">
                      {project.description}
                    </p>
                    {/* Techstack Icons */}
                    <div className="mt-4">
                      <p className="text-sm text-zinc-400 mb-2">Techstack:</p>
                      <div className="flex gap-2">
                        {project.techstack.map((tech, index) => (
                          <img
                            key={index}
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6"
                            title={tech.name} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-orange-600 text-zinc-50 rounded-lg hover:bg-orange-700 transition-colors w-56"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;