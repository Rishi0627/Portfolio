"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>DSA</li>
        {/* <li>OOPs</li>
        <li>Operating system</li> */}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Indian Institute of Information Technology,Guwahati</li>
        <li>CSE Undergraduate(Final Year)</li>
      </ul>
    ),
  },
  {
    title: "CourseWork",
    id: "coursework",
    content: (
      <ul className="list-disc pl-2">
        <li>Operating System</li>
        <li>OOps</li>
        <li>Computer Networks</li>
        <li>DataBase Management Sysytem</li>
        <li>Computer Security</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated and hardworking individual with a passion for exploring new technologies. Currently pursuing Computer Science Engineering in college, I am deeply engaged in the world of web development and competitive coding. My enthusiasm for learning drives me to constantly seek out new challenges and opportunities to grow. With a keen eye for detail and a commitment to excellence, I strive to make a positive impact in the ever-evolving landscape of technology.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("coursework")}
              active={tab === "coursework"}
            >
              {" "}
              CourseWork{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;