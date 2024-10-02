import React, { useState, useEffect } from "react";

const NumberCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 16.67); // 16.67ms per frame (60fps)

    const animate = () => {
      start += increment;
      if (start < targetNumber) {
        setCount(Math.round(start));
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber); // Ensure the final number is the exact targetNumber
      }
    };

    animate(); // Start the animation
  }, [targetNumber, duration]);

  return <div className="text-4xl font-bold text-center">{count}</div>;
};

export default NumberCounter;
