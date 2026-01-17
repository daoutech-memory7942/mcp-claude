interface ButtonProps {
  type?: "primary" | "secondary" | "normal" | "ghost";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  type = "primary",
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "h-h-5 px-p-5 rounded-medium font-pretendard text-typo-body-medium-bold transition-colors inline-flex items-center justify-center";

  const typeStyles = {
    primary:
      "bg-btn-bg-primary-base hover:bg-btn-bg-primary-hover text-btn-text-white",
    secondary:
      "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover border border-btn-border-primary text-btn-text-primary",
    normal:
      "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover border border-btn-border-normal text-btn-text-normal",
    ghost:
      "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover text-btn-text-normal",
  };

  return (
    <button
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
