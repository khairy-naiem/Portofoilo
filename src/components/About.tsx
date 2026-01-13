"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden ">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="glass-card p-10 md:p-14 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 relative inline-block">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Profile</span>
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                            A seasoned <span className="text-white font-medium">retail professional</span> with extensive experience in sales, team management, and
                            operational excellence. Proven ability to <span className="text-secondary">lead teams</span> to exceed targets, enhance customer
                            satisfaction, and drive revenue growth. Seeking to contribute to a prestigious organization
                            that values <span className="text-primary italic">innovation and excellence</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
