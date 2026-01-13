"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative "
        >
            {/* Dynamic Background Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-10 relative inline-block group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                        <div className="relative p-1 bg-background rounded-full">
                            <Image
                                src="/profile.jpg"
                                alt="Mohamed Elsayed Ibrahim"
                                width={200}
                                height={200}
                                className="rounded-full object-cover border-4 border-transparent bg-clip-padding"
                                priority
                            />
                        </div>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary font-medium text-xl md:text-2xl mb-4 tracking-wider uppercase"
                    >
                        Hello, I'm
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                    >
                        <span className="text-white">Mohamed </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent animate-gradient-x">
                            Elsayed
                        </span>
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
                    >
                        Sales Manager <span className="text-primary mx-2">|</span> Retail Leader
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400"
                    >
                        {[
                            { icon: Phone, text: "+20 128 466 0741" },
                            { icon: Mail, text: "elsyedm641@gmail.com" },
                            { icon: MapPin, text: "Tanta, Gharbia, Egypt" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/5 transition-colors cursor-default">
                                <item.icon size={18} className="text-secondary" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-3xl mx-auto text-gray-400 mb-12 text-lg leading-relaxed font-light"
                    >
                        A seasoned retail professional with extensive experience in sales, team management, and operational excellence.
                        Proven ability to lead teams to exceed targets, enhance customer satisfaction, and drive revenue growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            Contact Me <ArrowRight size={22} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/167cCucoamS5snyeFCoZm4-PNPIKRrMpR/view?usp=sharing"
                            className="px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 border border-white/10 hover:border-secondary/50 transition-all flex items-center justify-center gap-2"
                        >
                            Download CV <Download size={22} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
