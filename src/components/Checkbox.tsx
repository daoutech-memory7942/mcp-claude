interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-p-3 cursor-pointer ${disabled ? "cursor-not-allowed" : ""} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`w-4 h-4 rounded-small flex items-center justify-center transition-colors ${
          checked
            ? disabled
              ? "bg-control-bg-disabled-checked"
              : "bg-control-bg-primary"
            : disabled
              ? "bg-control-bg-disabled border border-control-border-level1-hover"
              : "bg-control-bg-normal border border-control-border-level1 hover:border-control-border-level1-hover"
        }`}
      >
        {checked && (
          <svg
            className={`w-3 h-3 ${disabled ? "text-control-icon-white" : "text-control-icon-white"}`}
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6L5 8.5L9.5 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <span
          className={`font-pretendard text-typo-body-medium-regular ${
            disabled ? "text-text-neutral-disabled" : "text-text-neutral-base"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
