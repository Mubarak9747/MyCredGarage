"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Wallet } from "lucide-react";
import { useState, useEffect } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface RewardProgressProps {
  points: number;
}

export const RewardProgress = ({ points }: RewardProgressProps) => {
  const maxPoints = 15000;
  const [livePoints, setLivePoints] = useState(points);
  const [recentGain, setRecentGain] = useState(0);
  const [showGainAnimation, setShowGainAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomGain = Math.floor(Math.random() * 50) + 10;
      setRecentGain(randomGain);
      setLivePoints((prev) => prev + randomGain);
      setShowGainAnimation(true);
      setTimeout(() => setShowGainAnimation(false), 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const livePercentage = (livePoints / maxPoints) * 100;
  const animatedLivePoints = useAnimatedCounter(livePoints, 1500);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            animate={{
              x: [Math.random() * 400, Math.random() * 400],
              y: [Math.random() * 200, Math.random() * 200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Reward Points
            </h3>
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-300"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Earning rewards in real-time ✨
            </motion.p>
          </div>
          <div className="flex items-center space-x-2 relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Wallet className="w-5 h-5 text-green-500" />
            </motion.div>

            <motion.span
              className="text-2xl font-bold text-green-600 dark:text-green-400"
              key={animatedLivePoints}
              animate={{
                color: ["#10b981", "#059669", "#10b981"],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 0.8 }}
            >
              {animatedLivePoints.toLocaleString()}
            </motion.span>

            <AnimatePresence>
              {showGainAnimation && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 0,
                    scale: 0.8,
                    x: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [-20, -40, -60],
                    scale: [0.8, 1, 1.1, 0.9],
                    x: [0, 10, -5, 15],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    y: -80,
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.3, 0.7, 1],
                  }}
                  className="absolute -top-2 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg"
                >
                  +{recentGain}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${livePercentage}%` }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 h-4 rounded-full relative overflow-hidden shadow-lg"
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />

              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-300/50 to-emerald-300/50 rounded-full"
              />

              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    x: [`${i * 20}%`, `${i * 20 + 10}%`, `${i * 20}%`],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">0</span>
            <motion.span
              className="text-xs text-gray-500 dark:text-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {maxPoints.toLocaleString()}
            </motion.span>
          </div>
        </div>

        {/* Status and tier info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-4 h-4" />
              </motion.div>
              <span>
                You&apos;re {Math.round(livePercentage)}% to the next tier!
              </span>
            </div>

            <motion.div
              className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400 font-medium"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.95, 1, 0.95],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Earning</span>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200/50 dark:border-green-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Next Milestone
                </p>
                <p className="text-xs text-green-600 dark:text-green-300">
                  {(maxPoints - livePoints).toLocaleString()} points to go
                </p>
              </div>
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="text-2xl"
              >
                🎯
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
