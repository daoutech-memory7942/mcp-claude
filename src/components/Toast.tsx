interface ToastProps {
  type?: "success" | "error";
  message: string;
  className?: string;
}

export default function Toast({
  type = "success",
  message,
  className = "",
}: ToastProps) {
  return (
    <div
      className={`w-80 px-p-6 py-p-5 rounded-xlarge flex items-center gap-p-2 ${
        type === "success"
          ? "bg-bg-status-positive border border-border-status-positive"
          : "bg-bg-status-negative border border-border-status-negative"
      } ${className}`}
    >
      {type === "success" && (
        <svg
          className="w-5 h-5 text-text-neutral-white shrink-0"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="8" fill="currentColor" />
          <path
            d="M6.5 10L9 12.5L13.5 8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <p className="flex-1 font-pretendard text-typo-body-large-regular text-text-neutral-white truncate">
        {message}
      </p>
      {type === "error" && (
        <svg
          className="w-5 h-5 text-text-neutral-white shrink-0"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="8" fill="currentColor" />
          <path
            d="M10 6V11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="14" r="1" fill="white" />
        </svg>
      )}
    </div>
  );
}
