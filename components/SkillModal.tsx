"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SkillModal({ skill, onClose }: any) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          {/* CARD */}
          <motion.div
            initial={{ scale: 0.7, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.7, y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gray-900 p-8 rounded-2xl w-[400px] border border-cyan-400 shadow-2xl shadow-cyan-500/20"
          >
            <h2 className="text-2xl text-cyan-400 mb-4">
              {skill.name}
            </h2>

            <p className="text-gray-300 mb-4">
              {skill.description}
            </p>

            <div className="space-y-2">
              {skill.topics.map((topic: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white"
                >
                  • {topic}
                </motion.div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}