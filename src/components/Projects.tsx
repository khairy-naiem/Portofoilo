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
        <section id="projects" className="py-20 relative bg-[#0f0518]">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Some of my recent work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <span className="bg-black/70 backdrop-blur text-white p-2 rounded-full">
                                        <ExternalLink size={20} />
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-secondary transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={18} /> Source Code
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
