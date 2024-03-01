import React, { useEffect, useState } from "react";

const ProgressBar = (props: any) => {
  const { percentage, title } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    const time = 2000 / percentage;

    interval = setInterval(() => {
      if (count === percentage) {
        clearInterval(interval);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, time);

    return () => clearInterval(interval);
  }, [count, percentage]);

  return (
    <div className="block">
      <div className="box">
        <p className="number">
          <span className="num">{count}</span>
          <span className="sub">%</span>
        </p>
        <p className="title">{title}</p>
      </div>
      <span className="dots"></span>
      <svg className="svg">
        <defs>
          <linearGradient id="gradientStyle">
            <stop offset="0%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#ba03fc" />
          </linearGradient>
        </defs>
        <circle
          className="circle"
          cx="90"
          cy="90"
          r="80"
          style={{
            strokeDashoffset: 503 - 503 * (count / 100),
          }}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
