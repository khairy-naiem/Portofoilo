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
        <section id="skills" className="py-20 bg-card/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        My <span className="text-secondary">Skills</span>
                    </h2>
                    <p className="text-gray-400">Competencies & Technical Abilities</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-xl border border-white/5"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 p-2 border-b border-white/10">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors"
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
