"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
  value: string;
  color: string;
}

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

export const BenefitCard = ({ benefit, index }: BenefitCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 cursor-pointer"
  >
    <div className="flex items-start justify-between mb-4">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg`}
      >
        {benefit.icon}
      </motion.div>
      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
        {benefit.value}
      </span>
    </div>

    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
      {benefit.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      {benefit.description}
    </p>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-shadow"
    >
      <span>Claim Now</span>
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  </motion.div>
);
