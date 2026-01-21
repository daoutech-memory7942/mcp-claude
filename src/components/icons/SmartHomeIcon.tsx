interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function SmartHomeIcon({ className = "", size = 24, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 8.71L13.667 4.562a2.5 2.5 0 00-3.334 0L5 8.71a2.5 2.5 0 00-.833 1.868V18a2.5 2.5 0 002.5 2.5h10.666a2.5 2.5 0 002.5-2.5v-7.422A2.5 2.5 0 0019 8.71z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15a4 4 0 01-8 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
