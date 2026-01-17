import { useState } from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "normal" | "ghost";
  children?: React.ReactNode;
  onClick?: () => void | Promise<void>;
  onDoubleClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

export default function Button({
  type = "primary",
  children,
  onClick,
  onDoubleClick,
  className = "",
  disabled = false,
  loading = false,
  htmlType = "button",
}: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || loading || isLoading) return;

    if (onClick) {
      const result = onClick();
      if (result instanceof Promise) {
        setIsLoading(true);
        try {
          await result;
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const isDisabled = disabled || loading || isLoading;
  const showLoading = loading || isLoading;

  const baseStyles =
    "h-h-5 px-p-5 rounded-medium font-pretendard text-typo-body-medium-bold transition-colors inline-flex items-center justify-center gap-2";

  const typeStyles = {
    primary: isDisabled
      ? "bg-btn-bg-primary-base opacity-50 cursor-not-allowed text-btn-text-white"
      : "bg-btn-bg-primary-base hover:bg-btn-bg-primary-hover text-btn-text-white",
    secondary: isDisabled
      ? "bg-btn-bg-normal-base border border-btn-border-primary opacity-50 cursor-not-allowed text-btn-text-primary"
      : "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover border border-btn-border-primary text-btn-text-primary",
    normal: isDisabled
      ? "bg-btn-bg-normal-base border border-btn-border-normal opacity-50 cursor-not-allowed text-btn-text-normal"
      : "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover border border-btn-border-normal text-btn-text-normal",
    ghost: isDisabled
      ? "bg-btn-bg-normal-base opacity-50 cursor-not-allowed text-btn-text-normal"
      : "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover text-btn-text-normal",
  };

  return (
    <button
      type={htmlType}
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
      disabled={isDisabled}
    >
      {showLoading && (
        <svg
          className="animate-spin w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
