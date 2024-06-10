import React from "react";
import "./styles.css";

type LoadingBarProps = {
  isLoading: boolean;
};

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => (
  <div
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Loading"
    className={`loading-bar ${isLoading ? "loading-bar--active" : ""}`}
  >
    <div className="loading-bar__progress" />
  </div>
);

export default LoadingBar;
