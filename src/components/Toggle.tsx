interface ToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Toggle({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}: ToggleProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-p-3 ${className}`}
      onClick={handleClick}
    >
      <div
        className={`relative w-8 h-5 rounded-full transition-colors cursor-pointer ${
          disabled
            ? checked
              ? "bg-toggle-bg-disabled-checked"
              : "bg-toggle-bg-disabled"
            : checked
              ? "bg-toggle-bg-primary"
              : "bg-toggle-bg-normal"
        } ${disabled ? "cursor-not-allowed" : ""}`}
      >
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-3.5" : "translate-x-0.5"
          }`}
        />
      </div>
      {label && (
        <span
          className={`font-pretendard text-typo-body-medium-regular ${
            disabled ? "text-toggle-text-disabled" : "text-toggle-text-normal"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
