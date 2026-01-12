"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Professional <span className="text-secondary">Profile</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        A seasoned retail professional with extensive experience in sales, team management, and
                        operational excellence. Proven ability to lead teams to exceed targets, enhance customer
                        satisfaction, and drive revenue growth. Seeking to contribute to a prestigious organization
                        that values innovation and excellence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
