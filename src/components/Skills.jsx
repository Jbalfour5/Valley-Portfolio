import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMediumOrSmallerDevice, setIsMediumOrSmallerDevice] = useState(
    window.innerWidth < 1024
  );
  const [skillsPerPage, setSkillsPerPage] = useState(
    window.innerWidth < 1024 ? 4 : 8 
  );

  const skillsData = [
    {
      title: "Java",
      description: "Object-oriented programming.",
      icon: <img src="images/JavaIcon.png" alt="Java programming language icon" className="JavaImg" width={40} height={40} />,
      tags: ["programming", "backend", "android"],
    },
    {
      title: "JavaScript",
      description: "Front-end development, DOM manipulation, and ES6+ features.",
      icon: <img src="images/JSIcon.png" alt="JavaScript programming language icon" className="JavaScriptIcon" width={40} height={40} />,
      tags: ["programming", "frontend", "web"],
    },
    {
      title: "C Programming",
      description: "Low-level programming, system development, and embedded systems.",
      icon: <img src="images/CIcon.png" alt="C programming language icon" className="CProgrammingIcon" width={40} height={40} />,
      tags: ["programming", "low-level", "system"],
    },
    {
      title: "GD Script",
      description: "Game development scripting for the Godot Engine.",
      icon: <img src="images/GDIcon.svg" alt="GD Script programming language icon" className="GDScriptIcon" width={40} height={40} />,
      tags: ["programming", "game-dev", "scripting"],
    },
    {
      title: "HTML5",
      description: "Semantic markup, web structure, and accessibility.",
      icon: <img src="images/HTML5Icon.svg" alt="HTML5 markup language icon" className="HTML5Icon" width={40} height={40} />,
      tags: ["frontend", "web", "markup"],
    },
    {
      title: "CSS",
      description: "Styling web pages, animations, and responsive design.",
      icon: <img src="images/CSSIcon.png" alt="CSS styling language icon" className="CSSIcon" width={40} height={40} />,
      tags: ["frontend", "web", "styling"],
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: <img src="images/TailwindIcon.png" alt="Tailwind CSS framework icon" className="TailwindIcon" width={40} height={40} />,
      tags: ["frontend", "web", "css-framework"],
    },
    {
      title: "Bootstrap",
      description: "Responsive design and pre-built UI components.",
      icon: <img src="images/BootstrapIcon.svg" alt="Bootstrap framework icon" className="BootstrapIcon" width={40} height={40} />,
      tags: ["frontend", "web", "css-framework"],
    },
    {
      title: "Node.js",
      description: "Server-side JavaScript runtime for building scalable applications.",
      icon: <img src="images/NodeJsIcon.png" alt="Node.js runtime icon" className="NodeJsIcon" width={40} height={40} />,
      tags: ["backend", "javascript", "web"],
    },
    {
      title: "React",
      description: "Front-end library for building user interfaces.",
      icon: <img src="images/ReactIcon.png" alt="React library icon" className="ReactIcon" width={40} height={40} />,
      tags: ["frontend", "javascript", "web"],
    },
    {
      title: "Ajax",
      description: "Asynchronous JavaScript and XML for dynamic web content.",
      icon: <img src="images/AjaxIcon.png" alt="Ajax technology icon" className="AjaxIcon" width={40} height={40} />,
      tags: ["frontend", "javascript", "web"],
    },
    {
      title: "Godot",
      description: "Open-source game engine for 2D and 3D game development.",
      icon: <img src="images/GDIcon.svg" alt="Godot game engine icon" className="GodotIcon" width={40} height={40} />,
      tags: ["game-dev", "engine", "2d", "3d"],
    },
    {
      title: "Unity",
      description: "Game development platform for 2D, 3D, and AR/VR games.",
      icon: <img src="images/UnityIcon.webp" alt="Unity game engine icon" className="UnityIcon" width={40} height={40} />,
      tags: ["game-dev", "engine", "2d", "3d", "ar-vr"],
    },
    {
      title: "Firebase",
      description: "Backend-as-a-service for real-time databases and authentication.",
      icon: <img src="images/FirebaseICon.webp" alt="Firebase platform icon" className="FirebaseIcon" width={40} height={40} />,
      tags: ["backend", "database", "authentication"],
    },
    {
      title: "SQL",
      description: "Structured Query Language for database management.",
      icon: <img src="images/SQLIcon.png" alt="SQL database language icon" className="SQLIcon" width={40} height={40} />,
      tags: ["database", "backend", "query"],
    },
    {
      title: "Figma",
      description: "Design and prototyping tool for UI/UX design.",
      icon: <img src="images/FigmaIcon.png" alt="Figma design tool icon" className="FigmaIcon" width={40} height={40} />,
      tags: ["design", "ui-ux", "prototyping"],
    },
    {
      title: "Github",
      description: "Version control and collaboration platform for developers.",
      icon: <img src="images/GithubIcon.png" alt="Github platform icon" className="GithubIcon" width={40} height={40} />,
      tags: ["version-control", "collaboration", "tools"],
    },
    {
      title: "Agile",
      description: "Project management methodology for iterative development.",
      icon: <img src="images/AgileIcon.png" alt="Agile methodology icon" className="AgileIcon" width={40} height={40} />,
      tags: ["project-management", "methodology"],
    },
    {
      title: "Unit Testing",
      description: "Testing individual components of software for reliability.",
      icon: <img src="images/UnitTesting Icon.png" alt="Unit testing icon" className="UnitTestingIcon" width={40} height={40} />,
      tags: ["testing", "software", "reliability"],
    },
  ];


  const filteredSkills = skillsData.filter(
    (skill) =>
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = isMediumOrSmallerDevice
    ? filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill)
    : filteredSkills;


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const handleResize = () => {
      const isMediumOrSmaller = window.innerWidth < 1024; 
      setIsMediumOrSmallerDevice(isMediumOrSmaller);
      setSkillsPerPage(isMediumOrSmaller ? 4 : 8); 
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="py-8 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-50">Technical Skills</h2>
          <input
            type="text"
            placeholder="Search skills or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded-lg bg-zinc-700 text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700/70 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2 text-zinc-50 text-center">{skill.title}</h3>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">{skill.icon}</div>
                <p className="text-sm text-zinc-400">{skill.description}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-zinc-700 text-zinc-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {isMediumOrSmallerDevice && (
          <div className="flex justify-center mt-6 gap-2">
              <motion.div
              href="https://linkedin.com/in/ValleyBalfour" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-zinc-700 text-zinc-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            </motion.div>
            {Array.from({ length: Math.ceil(filteredSkills.length / skillsPerPage) }, (_, i) => (
              <motion.div
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
             <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 text-zinc-50 rounded-lg ${
                currentPage === i + 1 ? "bg-slate-50 !important text-zinc-700" : "bg-zinc-700"
              }`}
            >
              {i + 1}
            </button>
            </motion.div>
            ))}
            <motion.div
              href="https://linkedin.com/in/ValleyBalfour" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastSkill >= filteredSkills.length}
              className="px-4 py-2 bg-zinc-700 text-zinc-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
            </motion.div>
          </div>
          
        )}
      </div>
    </section>
  );
};

export default Skills;