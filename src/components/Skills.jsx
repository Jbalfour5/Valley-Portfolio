import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      title: "Java",
      description: "Object-oriented programming.",
      icon: <img src="src/Images/JavaIcon.png" alt="Java programming language icon" className="JavaImg" width={40} height={40} />,
    },
    {
      title: "JavaScript",
      description: "Front-end development, DOM manipulation, and ES6+ features.",
      icon: <img src="src/Images/JSIcon.png" alt="JavaScript programming language icon" className="JavaScriptIcon" width={40} height={40} />,
    },
    {
      title: "C Programming",
      description: "Low-level programming, system development, and embedded systems.",
      icon: <img src="src/Images/CIcon.png" alt="C programming language icon" className="CProgrammingIcon" width={40} height={40} />,
    },
    {
      title: "GD Script",
      description: "Game development scripting for the Godot Engine.",
      icon: <img src="src/Images/GDIcon.svg" alt="GD Script programming language icon" className="GDScriptIcon" width={40} height={40} />,
    },
    {
      title: "HTML5",
      description: "Semantic markup, web structure, and accessibility.",
      icon: <img src="src/Images/HTML5Icon.svg" alt="HTML5 markup language icon" className="HTML5Icon" width={40} height={40} />,
    },
    {
      title: "CSS",
      description: "Styling web pages, animations, and responsive design.",
      icon: <img src="src/Images/CSSIcon.png" alt="CSS styling language icon" className="CSSIcon" width={40} height={40} />,
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: <img src="src/Images/TailwindIcon.png" alt="Tailwind CSS framework icon" className="TailwindIcon" width={40} height={40} />,
    },
    {
      title: "Bootstrap",
      description: "Responsive design and pre-built UI components.",
      icon: <img src="src/Images/BootstrapIcon.svg" alt="Bootstrap framework icon" className="BootstrapIcon" width={40} height={40} />,
    },
    {
      title: "Node.js",
      description: "Server-side JavaScript runtime for building scalable applications.",
      icon: <img src="src/Images/NodeJsIcon.png" alt="Node.js runtime icon" className="NodeJsIcon" width={40} height={40} />,
    },
    {
      title: "React",
      description: "Front-end library for building user interfaces.",
      icon: <img src="src/Images/ReactIcon.png" alt="React library icon" className="ReactIcon" width={40} height={40} />,
    },
    {
      title: "Ajax",
      description: "Asynchronous JavaScript and XML for dynamic web content.",
      icon: <img src="src/Images/AjaxIcon.png" alt="Ajax technology icon" className="AjaxIcon" width={40} height={40} />,
    },
    {
      title: "Godot",
      description: "Open-source game engine for 2D and 3D game development.",
      icon: <img src="src/Images/GDIcon.svg" alt="Godot game engine icon" className="GodotIcon" width={40} height={40} />,
    },
    {
      title: "Unity",
      description: "Game development platform for 2D, 3D, and AR/VR games.",
      icon: <img src="src/Images/UnityIcon.webp" alt="Unity game engine icon" className="UnityIcon" width={40} height={40} />,
    },
    {
      title: "Firebase",
      description: "Backend-as-a-service for real-time databases and authentication.",
      icon: <img src="src/Images/FirebaseIcon.webp" alt="Firebase platform icon" className="FirebaseIcon" width={40} height={40} />,
    },
    {
      title: "SQL",
      description: "Structured Query Language for database management.",
      icon: <img src="src/Images/SQLIcon.png" alt="SQL database language icon" className="SQLIcon" width={40} height={40} />,
    },
    {
      title: "Figma",
      description: "Design and prototyping tool for UI/UX design.",
      icon: <img src="src/Images/FigmaIcon.png" alt="Figma design tool icon" className="FigmaIcon" width={40} height={40} />,
    },
    {
      title: "Github",
      description: "Version control and collaboration platform for developers.",
      icon: <img src="src/Images/GithubIcon.png" alt="Github platform icon" className="GithubIcon" width={40} height={40} />,
    },
    {
      title: "Agile",
      description: "Project management methodology for iterative development.",
      icon: <img src="src/Images/AgileIcon.png" alt="Agile methodology icon" className="AgileIcon" width={40} height={40} />,
    },
    {
      title: "Unit Testing",
      description: "Testing individual components of software for reliability.",
      icon: <img src="src/Images/UnitTesting Icon.png" alt="Unit testing icon" className="UnitTestingIcon" width={40} height={40} />,
    },
  ];

  return (
    <section id="skills" className="py-8 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-zinc-50">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skillsData.map((skill, index) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;