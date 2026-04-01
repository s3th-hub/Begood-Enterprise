import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-950 border border-zinc-900 p-12 md:p-20 rounded-[3rem] relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Join Our Community
          </motion.h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Stay Ahead of the <span className="text-primary">Curve.</span>
          </h3>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Get exclusive insights, industry trends, and updates from Begood Enterprise delivered straight to your inbox.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-zinc-800 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button
                type="submit"
                className="bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xl"
            >
              Thanks for joining! Welcome to the enterprise.
            </motion.div>
          )}

          <p className="mt-8 text-zinc-600 text-xs uppercase tracking-widest">
            No spam. Just high-impact content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
