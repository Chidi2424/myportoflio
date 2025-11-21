import { Github, ExternalLink, ArrowRight } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "FUTO Computer Science Platform",
    description: "A beautiful interactive web app using MERN stack.",
    image: "/projects/download.jpeg",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://chidi-csc-app.vercel.app/",
    githubUrl: "https://github.com/Chidi2424/departmental-info-board",
  },
  {
    id: 2,
    title: "Viddy's Restaurant Delivery App",
    description: "A modern and user-friendly web app for ordering food online.",
    image: "/projects/mak.jpg",
    tags: ["TypeScript", "D3.js"],
    demoUrl: "https://viddy-s-restaurant.vercel.app/",
    githubUrl: "https://github.com/Chidi2424/viddy-s-culinary-journey",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/de.jpg",
    tags: ["React", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4">
          Here are some of my recent projects.Each Project was carefully crafted
          with attention to detail, performance and userf experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover object-top transxition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    target="_blank"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    target="_blank"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Chidi2424"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
