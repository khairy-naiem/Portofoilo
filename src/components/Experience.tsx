"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Team Leader & Branch Store Manager",
        company: "Comedya Store, Egypt",
        period: "2023 – Jan 2026",
        description: [
            "Managed daily operations of a mobile retail branch, ensuring smooth workflow and high service quality.",
            "Led and trained the sales team to achieve monthly targets and improve performance.",
            "Assisted customers in choosing smartphones, accessories, and services based on their needs.",
            "Handled inventory management, stock ordering, and loss prevention.",
            "Resolved customer issues professionally, increasing satisfaction and repeat business.",
            "Tracked sales and prepared reports to support business growth and decision-making.",
        ],
    },
    {
        title: "Team Leader & Branch Store Manager",
        company: "Van Dutti, Egypt",
        period: "2021 – Jan 2023",
        description: [
            "Led and motivated teams to achieve outstanding sales targets.",
            "Developed innovative strategies to enhance customer engagement and satisfaction.",
            "Monitored store operations, ensuring efficiency and compliance with policies.",
            "Analyzed sales data to drive growth and improve performance.",
        ],
    },
    {
        title: "Sales & Assistant Manager & Branch Store Manager",
        company: "Carfort, Egypt",
        period: "2018 – 2021",
        description: [
            "Managed daily sales operations to achieve and exceed targets.",
            "Assisted in developing and implementing effective sales strategies.",
            "Supervised staff performance to ensure exceptional customer service.",
            "Maintained inventory levels and optimized stock management processes.",
            "Built strong client relationships to enhance loyalty and satisfaction.",
        ],
    },
    {
        title: "Sales & Assistant Manager",
        company: "Town Team, Egypt",
        period: "2015 – 2018",
        description: [
            "Oversaw daily sales activities, achieving consistent revenue growth.",
            "Trained and supervised staff to maintain service excellence.",
            "Managed inventory to ensure stock availability and accuracy.",
            "Assisted in developing promotional campaigns to boost sales.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative bg-background">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Professional <span className="text-secondary">Experience</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="glass-card p-8 rounded-2xl md:text-left relative group hover:border-secondary/30 transition-all duration-300">
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full hidden md:block ${index % 2 === 0 ? "-right-[42px]" : "-left-[42px]"
                                        }`}>
                                        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-50"></div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                <Briefcase size={20} className="text-secondary" />
                                                {exp.title}
                                            </h3>
                                            <p className="text-gray-300 font-medium mt-1">{exp.company}</p>
                                        </div>
                                        <span className="text-secondary bg-secondary/10 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap border border-secondary/20">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-3 text-gray-400">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
