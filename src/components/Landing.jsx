import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function LandingPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-blue-500">QueryVault</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Upload documents. Ask anything. Get instant insights powered by AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button className="text-lg px-6 py-4 rounded-2xl shadow-lg">
            Get Started <BsArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </section>

      <section className="mt-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        {[
          {
            title: "Document Upload",
            desc: "Upload PDFs or contracts. We parse and store them securely."
          },
          {
            title: "Semantic Search",
            desc: "Ask questions in natural language. We retrieve exact clauses."
          },
          {
            title: "AI Answers",
            desc: "Context-aware responses using powerful language models."
          }
        ].map(({ title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};