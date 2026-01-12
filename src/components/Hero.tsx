"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl"></div>
                        <Image
                            src="/profile.jpg"
                            alt="Mohamed Elsayed Ibrahim"
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-secondary/50 relative z-10 object-cover"
                            priority
                        />
                    </div>

                    <h2 className="text-secondary font-medium text-xl mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Mohamed Elsayed Ibrahim
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                        Sales Manager | Experienced Retail Leader
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Phone size={18} className="text-secondary" />
                            <span>+20 128 466 0741</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={18} className="text-secondary" />
                            <span>elsyedm641@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-secondary" />
                            <span>Tanta, Gharbia, Egypt</span>
                        </div>
                    </div>

                    <p className="max-w-3xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
                        A seasoned retail professional with extensive experience in sales, team management, and operational excellence.
                        Proven ability to lead teams to exceed targets, enhance customer satisfaction, and drive revenue growth.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            Contact Me <ArrowRight size={20} />
                        </a>
                        {/* Placeholder for CV download if available later */}
                        {/* <a
                            href="/cv.pdf" 
                            className="px-8 py-3 border border-secondary text-secondary hover:bg-secondary/10 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            Download CV <Download size={20} />
                        </a> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
