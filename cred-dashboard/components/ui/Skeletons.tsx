"use client";

interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader = ({ className }: SkeletonLoaderProps) => (
  <div
    className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded-lg ${className}`}
  />
);

export const UserProfileSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
    <div className="flex items-center space-x-4 mb-4">
      <SkeletonLoader className="w-16 h-16 rounded-full" />
      <div className="flex-1">
        <SkeletonLoader className="h-6 w-32 mb-2" />
        <SkeletonLoader className="h-4 w-20" />
      </div>
    </div>
    <SkeletonLoader className="h-4 w-full mb-2" />
    <SkeletonLoader className="h-6 w-full rounded-full" />
  </div>
);

export const BenefitCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
    <div className="flex items-start justify-between mb-4">
      <SkeletonLoader className="w-12 h-12 rounded-lg" />
      <SkeletonLoader className="w-16 h-6 rounded-full" />
    </div>
    <SkeletonLoader className="h-6 w-3/4 mb-2" />
    <SkeletonLoader className="h-4 w-full mb-4" />
    <SkeletonLoader className="h-10 w-full rounded-lg" />
  </div>
);
