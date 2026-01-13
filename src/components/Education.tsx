"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Languages } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                            <span className="p-3 rounded-xl bg-primary/20 text-primary">
                                <BookOpen size={28} />
                            </span>
                            Education
                        </h3>
                        <div className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                Bachelor’s Degree in Psychology
                            </h4>
                            <p className="text-gray-300 text-lg mb-4">
                                Faculty of Education, Tanta University, Egypt
                            </p>
                            <span className="inline-block text-white bg-primary/20 px-4 py-1.5 rounded-lg text-sm font-medium">
                                2023
                            </span>
                        </div>
                    </motion.div>

                    {/* Certifications & Languages */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-8">
                                <span className="p-3 rounded-xl bg-secondary/20 text-secondary">
                                    <Award size={28} />
                                </span>
                                Certifications
                            </h3>
                            <div className="glass-card p-8 rounded-2xl space-y-6">
                                <div className="border-b border-white/10 pb-6 last:border-0 last:pb-0 hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="text-xl font-bold text-white mb-1">
                                        Sales and Retail Management
                                    </h4>
                                    <p className="text-gray-400">IBS Training Academy</p>
                                </div>
                                <div className="border-b border-white/10 pb-6 last:border-0 last:pb-0 hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="text-xl font-bold text-white mb-1">
                                        Certification in Psychology
                                    </h4>
                                    <p className="text-gray-400">Alison</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-8 pt-4">
                                <span className="p-3 rounded-xl bg-accent/20 text-accent">
                                    <Languages size={28} />
                                </span>
                                Languages
                            </h3>
                            <div className="flex gap-4 flex-wrap">
                                <div className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 transition-transform">
                                    <span className="text-white font-bold text-lg">Arabic</span>
                                    <span className="text-xs font-bold bg-white/10 text-white px-2 py-1 rounded">NATIVE</span>
                                </div>
                                <div className="glass-card px-6 py-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 transition-transform">
                                    <span className="text-white font-bold text-lg">English</span>
                                    <span className="text-xs font-bold bg-secondary/20 text-secondary px-2 py-1 rounded">VERY GOOD</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
