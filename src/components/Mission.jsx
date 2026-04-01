import { motion } from "motion/react";

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Our Mission
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Websites that work like <br />
              <span className="italic font-serif text-primary text-3xl md:text-5xl">Automated Sales Machines.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We strip away the noise to build growth systems designed to attract more clients online. Unlike traditional agencies, Begood Enterprise focuses on measurable results—turning visitors into paying customers through precision design and strategic automation.
            </p>
            <div className="space-y-4 mb-8">
              {["Service-Based Innovators", "High-Growth E-commerce", "Tech-Driven Startups"].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-zinc-200 font-medium tracking-wide">Built for {item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
              alt="Mission Visualization"
              className="rounded-2xl shadow-2xl shadow-primary/10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 -right-8 bg-primary text-black p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-black">100%</p>
              <p className="text-xs font-bold uppercase tracking-tighter">Commitment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
