"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Event Management Website",
      description:
      "Developed a comprehensive event management website designed to streamline the planning and execution of various types of events, including conferences, workshops, and social gatherings.",
      image: "/images/projects/1.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Rishi0627/event-management-client",
      previewUrl: "https://event-management-client-six.vercel.app/",
    },
    {
      id: 2,
      title: "ChatBot Using API",
      description: "Discover the power of conversational AI with a chatbot built using cutting-edge APIs, providing seamless interactions and personalized assistance tailored to your needs.",
      image: "/images/projects/2.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Rishi0627/chatBot-Pro",
      previewUrl: "https://chat-bot-pro.vercel.app/",
    },
    {
      id: 3,
      title: "Snake Game",
      description: "Experience the classic Snake game,offering nostalgic gameplay and endless fun on any device",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Rishi0627/Snake-game",
      previewUrl: "https://rishi0627.github.io/Snake-game/",
    },
    {
      id: 4,
      title: "Simon Game",
      description: "The game challenges players to repeat a series of randomly generated patterns of colors and sounds, testing their memory and concentration skills.Try your hand at this nostalgic game.",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "https://rishi0627.github.io/simon-game/",
      previewUrl: "https://github.com/Rishi0627/simon-game",
    },
    {
      id: 5,
      title: "Dice Game",
      description: " Devloped random selecting dice game using HTML, CSS, and JavaScript. This game involves rolling a virtual dice and selecting a random number between 1 and 6..",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://rishi0627.github.io/Dice-game/",
      previewUrl: "https://github.com/Rishi0627/Dice-game",
    },
  
   
  ];

  const ProjectsSection = () => {
    // const [tag, setTag] = useState("All");
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });
  
    // const handleTagChange = (newTag) => {
    //   setTag(newTag);
    // };
  
    // const filteredProjects = projectsData.filter((project) =>
    //   project.tag.includes(tag)
    // );
  
    // const cardVariants = {
    //   initial: { y: 50, opacity: 0 },
    //   animate: { y: 0, opacity: 1 },
    // };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
         
        </div> */}
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            // <motion.li
            //   key={index}
            //   variants={cardVariants}
            //   initial="initial"
            //   animate={isInView ? "animate" : "initial"}
            //   transition={{ duration: 0.3, delay: index * 0.4 }}
            // >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            // </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;