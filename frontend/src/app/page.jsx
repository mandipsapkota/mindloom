'use client';
import { motion } from 'framer-motion';

const page = () => {
  const featureDetails = {
    Loomboard: "Organize your thoughts visually with Loomboard.",
    Notes: "Capture quick notes and ideas effortlessly.",
    Tasks: "Stay on top of your to-dos and deadlines.",
    Journals: "Reflect and document your daily journey.",
    Mindspace: "A serene space for brainstorming and creativity.",
    Pomodoro: "Boost productivity with the Pomodoro technique.",
    Harmonia: "Achieve balance and harmony in your workflow with awesome music.",
    Calendar: "Plan and schedule your days effectively.",
    Mindbot: "Your AI assistant for smarter decision-making.",
  };

  return (
    <main className="relative bg-gray-950 min-h-screen text-gray-100 overflow-hidden font-sans">
      {/* Animated Gradient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-gray-950 to-gray-900 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Glow circles for background ambience */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-700/20 blur-3xl animate-pulse"
      />
      <motion.div
        className="absolute -bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-2xl animate-pulse"
      />

      {/* Subtle Grid */}
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-2 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        {Array.from({ length: 144 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-full bg-white/5 border border-white/10"
          />
        ))}
      </motion.div>

      {/* Navbar */}
      <nav className="relative z-20 mx-auto max-w-6xl px-6 py-4 mt-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg">
        <ul className="flex justify-center gap-10 text-lg font-medium tracking-wide">
          {['Home', 'Blogs', 'Login/Dashboard'].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 max-w-4xl mx-auto mt-24 px-6 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-white text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Mindloom
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mt-6 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Your intelligent second brain. Capture ideas, manage todos, journal your thoughts, and interact with a powerful AI — all in one beautiful interface.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <motion.button
            className="px-8 py-4 bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Get Started
          </motion.button>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          {Object.entries(featureDetails).map(([feature, description], index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 bottom-0 hover:bottom-1.5 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-cyan-400">{feature}</h3>
              <p className="mt-2 text-gray-300">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default page;