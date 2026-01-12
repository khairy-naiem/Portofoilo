"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, Languages } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Education & <span className="text-secondary">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            <BookOpen className="text-secondary" /> Education
                        </h3>
                        <div className="bg-card p-6 rounded-xl border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-2">
                                Bachelor’s Degree in Psychology
                            </h4>
                            <p className="text-secondary mb-2">
                                Faculty of Education, Tanta University, Egypt
                            </p>
                            <span className="text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm">
                                2023
                            </span>
                        </div>
                    </motion.div>

                    {/* Certifications & Languages */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                                <Award className="text-secondary" /> Certifications
                            </h3>
                            <div className="bg-card p-6 rounded-xl border border-white/5 space-y-4">
                                <div className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <h4 className="text-lg font-medium text-white">
                                        Sales and Retail Management
                                    </h4>
                                    <p className="text-gray-400 text-sm">IBS Training Academy</p>
                                </div>
                                <div className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <h4 className="text-lg font-medium text-white">
                                        Certification in Psychology
                                    </h4>
                                    <p className="text-gray-400 text-sm">Alison</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                                <Languages className="text-secondary" /> Languages
                            </h3>
                            <div className="bg-card p-6 rounded-xl border border-white/5 flex gap-4 flex-wrap">
                                <span className="bg-white/5 px-4 py-2 rounded-lg text-white">
                                    Arabic <span className="text-secondary text-sm ml-1">(Native)</span>
                                </span>
                                <span className="bg-white/5 px-4 py-2 rounded-lg text-white">
                                    English <span className="text-secondary text-sm ml-1">(Very Good)</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
