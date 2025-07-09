"use client";

import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, Settings, Key, BellRing, FileText } from "lucide-react";

const steps = [
  {
    icon: <BellRing size={32} color="brown"/>,
    title: "Initial Consultation",
    description: "We begin with a complimentary site visit to understand your vision, preferences, and budget. This helps us shape a tailored design path for you.",
  },
  {
    icon: <ClipboardList size={32} color="brown"/>,
    title: "Personalized Design Brief",
    description: "We gather detailed inputs on your lifestyle, design tastes, preferred materials, and color palettes to build a personalized design strategy.",
  },
  {
    icon: <FileText size={32} color="brown"/>,
    title: "Project Estimation",
    description: "Get a clear estimate with 3D visuals, layout plans, and cost projections to ensure transparency and smart planning.",
  },
  {
    icon: <CheckCircle size={32} color="brown"/>,
    title: "Final Design Selection",
    description: "We finalize the design—furniture, finishes, laminates, wallpapers, and décor elements—so you're confident before execution.",
  },
  {
    icon: <Settings size={32} color="brown"/>,
    title: "Execution with Updates",
    description: "Our expert team begins implementation with regular updates on WhatsApp, adhering to timelines and quality benchmarks.",
  },
  {
    icon: <Key size={32} color="brown"/>,
    title: "Final Handover",
    description: "Your dream space is delivered clean and ready. A complimentary photoshoot is included for your keepsake and wall frames.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white" id="workflow">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Project Workflow
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A seamless journey from concept to creation—crafted with clarity, care, and creativity.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-indigo-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
