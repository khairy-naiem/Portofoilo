"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/elsyedm641@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        _subject: `New submission from ${formData.name}`,
                    }),
                }
            );

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setIsSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Touch</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            I'm currently looking for new opportunities. My inbox is always open!
                        </p>
                    </motion.div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-black/40 transition-all font-light"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-black/40 transition-all font-light"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-black/40 transition-all font-light"
                                    placeholder="+1 234 567 890"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:bg-black/40 transition-all font-light resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto md:px-12 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSuccess ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                            {isSuccess && (
                                <p className="text-center text-green-400 mt-4 font-medium animate-pulse">
                                    Thank you! Your message has been sent successfully.
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-xl font-medium text-white mb-8">
                            Or connect with me on social media
                        </h3>
                        <div className="flex justify-center gap-8">
                            {[
                                { icon: FaInstagram, href: "https://www.instagram.com/muhammeed_elsayedd?igsh=MTBqZTZxZzY1eTg2OQ%3D%3D&utm_source=qr", color: "hover:text-pink-500" },
                                { icon: FaFacebook, href: "https://www.facebook.com/share/1bkE9NYpDa/?mibextid=wwXIfr", color: "hover:text-blue-500" },
                                { icon: FaWhatsapp, href: "https://wa.me/201284660741", color: "hover:text-green-500" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-5 glass rounded-full text-gray-400 ${social.color} hover:bg-white/10 hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-white/20`}
                                >
                                    <social.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
