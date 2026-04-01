import { motion } from "motion/react";
import { Zap, Shield, Globe, Cpu, BarChart, Layers } from "lucide-react";

const services = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Strategic Web Design",
    description: "High-converting interfaces designed to turn casual visitors into loyal, paying clients."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Driven Automation",
    description: "Streamlined workflows that eliminate manual bottlenecks and accelerate your business output."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Growth Infrastructure",
    description: "Scalable cloud-native foundations built to handle your business as it doubles in size."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance SEO",
    description: "Data-backed optimization that puts your brand in front of the right audience at the right time."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Conversion Analytics",
    description: "Deep insights into user behavior to continuously optimize your sales funnel and ROI."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Client Acquisition",
    description: "End-to-end systems designed to attract, engage, and convert high-value leads automatically."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Solutions for the <span className="text-primary">Next Era.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-black border border-zinc-900 rounded-3xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
              <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
              <div className="mt-6 w-8 h-[2px] bg-zinc-800 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
