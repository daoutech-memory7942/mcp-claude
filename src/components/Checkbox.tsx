interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  name?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  indeterminate?: boolean;
}

export default function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  className = "",
  name,
  value,
  required = false,
  error = false,
  errorMessage,
  indeterminate = false,
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const showError = error || (required && !checked);

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className={`inline-flex items-center gap-p-3 cursor-pointer ${disabled ? "cursor-not-allowed" : ""}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={disabled ? -1 : 0}
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        aria-disabled={disabled}
      >
        <div
          className={`w-4 h-4 rounded-small flex items-center justify-center transition-colors ${
            checked || indeterminate
              ? disabled
                ? "bg-control-bg-disabled-checked"
                : "bg-control-bg-primary"
              : disabled
                ? "bg-control-bg-disabled border border-control-border-level1-hover"
                : showError
                  ? "bg-control-bg-normal border border-input-border-error"
                  : "bg-control-bg-normal border border-control-border-level1 hover:border-control-border-level1-hover"
          }`}
        >
          {indeterminate && !checked && (
            <div className="w-2 h-0.5 bg-control-icon-white rounded-full" />
          )}
          {checked && (
            <svg
              className="w-3 h-3 text-control-icon-white"
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
            {required && <span className="text-input-text-error ml-0.5">*</span>}
          </span>
        )}
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => {}}
          className="sr-only"
          aria-hidden="true"
        />
      </div>
      {showError && errorMessage && (
        <p className="mt-1 font-pretendard text-typo-body-medium-regular text-input-text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
