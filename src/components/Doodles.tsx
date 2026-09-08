import React from "react";

export const DoodleArrow: React.FC<{ className?: string; color?: string }> = ({
  className = "w-12 h-12",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 48C18 36 28 20 48 16M48 16L36 12M48 16L44 28"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CurvedArrowDown: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-10",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 8C24 6 36 14 36 34M36 34L26 28M36 34L44 26"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14.2 8.5L21 9.2L15.8 13.8L17.4 20.5L12 17L6.6 20.5L8.2 13.8L3 9.2L9.8 8.5L12 2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-5 h-5",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3V21M3 12H21M6 6L18 18M18 6L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleScribble: React.FC<{ className?: string; color?: string }> = ({
  className = "w-24 h-4",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 120 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 11C24 4 45 13 65 8C85 3 102 12 117 7"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleCircle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-16",
  color = "#B7FF00",
}) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M30 6C45 5 55 18 53 33C51 47 38 55 24 53C10 51 5 36 8 22C11 9 24 6 38 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 2"
    />
  </svg>
);
