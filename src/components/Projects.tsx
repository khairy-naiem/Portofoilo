"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Project One",
        description:
            "A modern web application built with Next.js and Tailwind CSS. Features include user authentication, dashboard, and data visualization.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: "https://placehold.co/600x400/2a1653/ffffff?text=Project+One", // Placeholder
        demo: "#",
        github: "#",
    },
    {
        title: "Project Two",
        description:
            "E-commerce platform with cart functionality, payment integration, and product management system.",
        tags: ["React", "Redux", "Stripe"],
        image: "https://placehold.co/600x400/2a1653/ffffff?text=Project+Two", // Placeholder
        demo: "#",
        github: "#",
    },
    {
        title: "Project Three",
        description:
            "Portfolio website template designed for developers to showcase their work effectively.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "https://placehold.co/600x400/2a1653/ffffff?text=Project+Three", // Placeholder
        demo: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured <span className="text-secondary">Projects</span>
                    </h2>
                    <p className="text-gray-400">Some of my recent work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-secondary/50 transition-all group"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized // For placeholder images
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm text-white hover:text-secondary transition-colors"
                                    >
                                        <Github size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
