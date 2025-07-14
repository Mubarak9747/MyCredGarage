"use client";

import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";

export interface UserStats {
  name: string;
  level: number;
  xp: number;
  maxXp: number;
  avatar: string;
}

interface UserProfileProps {
  user: UserStats;
}

export const UserProfile = ({ user }: UserProfileProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
  >
    <div className="flex items-center space-x-4 mb-6">
      <motion.div whileHover={{ scale: 1.05 }} className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/20"
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
      </motion.div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {user.name}
        </h2>
        <div className="flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Level {user.level}
          </span>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          XP Progress
        </span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {user.xp}/{user.maxXp}
        </span>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(user.xp / user.maxXp) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);
