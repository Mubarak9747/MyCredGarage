"use client";

import { useState, useEffect } from "react";

export const useAnimatedCounter = (targetValue: number, duration = 2000) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startValue = currentValue;
    const difference = targetValue - startValue;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newValue = Math.round(startValue + difference * easeOutQuart);

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, currentValue]);

  return currentValue;
};
