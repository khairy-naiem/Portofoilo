"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Core Competencies",
        skills: [
            "Building & Managing Customer Relationships",
            "Improving Revenues",
            "Managing Budgets",
            "Inventory & Supply Chain Management",
            "Marketing Strategies",
            "Operational Excellence",
            "Leading Teams",
            "Conflict Resolution",
        ],
    },
    {
        title: "Personal Skills",
        skills: [
            "Leadership",
            "Teamwork",
            "Self-confidence",
            "Effective Communication",
            "Creative Problem-solving",
            "Organization & Planning",
            "Integrity & Ethics",
            "Adaptability",
            "Work Under Pressure",
        ],
    },
    {
        title: "Technical Skills",
        skills: [
            "Retail Management Systems",
            "Microsoft Office (Word, Excel, PowerPoint)",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Competencies & Technical Abilities</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/10 group-hover:border-secondary/30 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm md:text-base bg-white/5 text-gray-300 px-4 py-2 rounded-full border border-white/5 group-hover:border-secondary/30 group-hover:bg-secondary/5 transition-all duration-300 cursor-default hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
