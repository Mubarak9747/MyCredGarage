"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Gift, Sparkles } from "lucide-react";

export const StatsFooter = () => {
  const stats = [
    {
      label: "Total Savings",
      value: "₹24,750",
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      label: "Benefits Claimed",
      value: "127",
      icon: <Gift className="w-5 h-5" />,
    },
    {
      label: "Active Offers",
      value: "23",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <div className="text-blue-600 dark:text-blue-400">
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
