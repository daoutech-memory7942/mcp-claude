interface RadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export default function Radio({
  label,
  checked = false,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  name,
  value,
  className = "",
  required = false,
  error = false,
  errorMessage,
}: RadioProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(true);
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
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
      >
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
            checked
              ? disabled
                ? "bg-control-bg-disabled-checked"
                : "bg-control-bg-normal border border-control-border-primary"
              : disabled
                ? "bg-control-bg-disabled border border-control-border-level1-hover"
                : showError
                  ? "bg-control-bg-normal border border-input-border-error"
                  : "bg-control-bg-normal border border-control-border-level1 hover:border-control-border-level1-hover"
          }`}
        >
          {checked && !disabled && (
            <div className="w-2 h-2 rounded-full bg-control-bg-primary" />
          )}
          {checked && disabled && (
            <div className="w-2 h-2 rounded-full bg-white" />
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
          type="radio"
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
