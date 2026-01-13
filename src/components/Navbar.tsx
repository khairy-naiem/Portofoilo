"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpen ? "bg-[#0f0518]" : "glass-nav"}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-wide group">
                    <span className="text-white group-hover:text-primary transition-colors duration-300">Mohamed</span>
                    <span className="text-secondary group-hover:text-white transition-colors duration-300"> Elsayed</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-white relative group py-2"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-secondary">{item.name}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300 ease-out" />
                            <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 rounded-md transition-transform duration-300 -z-0" />
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 font-medium shadow-[0_0_10px_rgba(0,242,255,0.2)] hover:shadow-[0_0_20px_rgba(0,242,255,0.6)]"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-[#0f0518]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden shadow-2xl",
                    isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
                )}
            >
                <div className="flex flex-col items-center space-y-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-2xl text-gray-300 hover:text-secondary transition-colors duration-300 font-light tracking-wider"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-8 py-3 rounded-full bg-secondary text-black font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
}
