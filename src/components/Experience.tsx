"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
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
        <section id="experience" className="py-20 bg-card/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-secondary">Experience</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-xl border border-white/5 hover:border-secondary/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-secondary" />
                                        {exp.title}
                                    </h3>
                                    <p className="text-secondary font-medium">{exp.company}</p>
                                </div>
                                <span className="text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
