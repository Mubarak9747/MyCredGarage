"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Gift,
  CreditCard,
  Zap,
  Star,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import {
  UserProfileSkeleton,
  BenefitCardSkeleton,
  SkeletonLoader,
} from "@/components/ui/Skeletons";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { BenefitCard } from "@/components/dashboard/BenefitCard";
import { RewardProgress } from "@/components/dashboard/RewardProgress";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
const CredDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  type UserStats = {
    name: string;
    level: number;
    xp: number;
    maxXp: number;
    avatar: string;
  };

  const [userStats, setUserStats] = useState<UserStats | null>(null);
  type Benefit = {
    id: number;
    title: string;
    description: string;
    icon: React.JSX.Element;
    value: string;
    color: string;
  };

  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [rewardPoints, setRewardPoints] = useState(0);

  // Mock API calls with loading states
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setUserStats({
        name: "Alex Johnson",
        level: 7,
        xp: 2340,
        maxXp: 3000,
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      });

      setBenefits([
        {
          id: 1,
          title: "Cashback Rewards",
          description: "Earn 2% cashback on all purchases",
          icon: <CreditCard className="w-6 h-6" />,
          value: "2% Back",
          color: "from-blue-500 to-purple-600",
        },
        {
          id: 2,
          title: "Premium Vouchers",
          description: "Access exclusive brand vouchers",
          icon: <Gift className="w-6 h-6" />,
          value: "50+ Brands",
          color: "from-green-500 to-teal-600",
        },
        {
          id: 3,
          title: "Lightning Deals",
          description: "Flash sales and limited offers",
          icon: <Zap className="w-6 h-6" />,
          value: "24h Access",
          color: "from-yellow-500 to-orange-600",
        },
        {
          id: 4,
          title: "VIP Treatment",
          description: "Priority support and benefits",
          icon: <Star className="w-6 h-6" />,
          value: "Level 7+",
          color: "from-pink-500 to-rose-600",
        },
      ]);

      setRewardPoints(12750);
      setLoading(false);
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              CRED Garage
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Your premium rewards dashboard
            </p>
          </div>

          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Profile & Rewards */}
          <div className="xl:col-span-1 space-y-6">
            {loading ? (
              <>
                <UserProfileSkeleton />
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                  <SkeletonLoader className="h-6 w-32 mb-4" />
                  <SkeletonLoader className="h-4 w-full mb-4" />
                  <SkeletonLoader className="h-4 w-3/4" />
                </div>
              </>
            ) : (
              <>
                {userStats && <UserProfile user={userStats} />}
                <RewardProgress points={rewardPoints} />
              </>
            )}
          </div>

          {/* Right Column - Benefits */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Your Benefits
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Exclusive rewards and offers just for you
              </p>
            </motion.div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <BenefitCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <BenefitCard
                    key={benefit.id}
                    benefit={benefit}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
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
          ].map((stat) => (
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
      </div>
    </div>
  );
};

export default CredDashboard;
