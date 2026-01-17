import { useState, useEffect, useRef } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  requiredMessage?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export default function Select({
  options,
  value,
  onChange,
  onBlur,
  placeholder = "셀렉트",
  className = "",
  required = false,
  requiredMessage = "필수 선택 항목입니다.",
  disabled = false,
  error = false,
  errorMessage,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const validate = (val?: string): string | null => {
    if (required && !val) {
      return requiredMessage;
    }
    return null;
  };

  const handleSelect = (optionValue: string) => {
    if (disabled) return;
    onChange?.(optionValue);
    setIsOpen(false);
    setInternalError(validate(optionValue));
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTouched(true);
    setInternalError(validate(value));
    onBlur?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (isFocused) {
          handleBlur();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFocused, value]);

  const displayError = error || (touched && internalError !== null);
  const displayErrorMessage = errorMessage || internalError;

  const borderColor = displayError
    ? "border-input-border-error"
    : isFocused
      ? "border-border-neutral-level1-hover"
      : "border-border-neutral-level1";

  return (
    <div ref={selectRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setTouched(true);
          setInternalError(validate(value));
          setTimeout(() => setIsOpen(false), 150);
        }}
        disabled={disabled}
        className={`w-full h-h-5 px-p-4 bg-bg-neutral-base border ${borderColor} rounded-medium flex items-center justify-between font-pretendard text-typo-body-medium-regular text-text-neutral-base transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className={`truncate ${!selectedOption ? "text-text-neutral-disabled" : ""}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-icon-neutral-level1 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-bg-neutral-surface border border-border-neutral-level1 rounded-medium shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => !option.disabled && handleSelect(option.value)}
              disabled={option.disabled}
              className={`w-full px-p-4 py-2 text-left font-pretendard text-typo-body-medium-regular transition-colors ${
                option.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-bg-neutral-level1"
              } ${
                option.value === value
                  ? "bg-bg-neutral-level1 text-text-primary-base"
                  : "text-text-neutral-base"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {displayError && displayErrorMessage && (
        <p className="mt-1 font-pretendard text-typo-body-medium-regular text-input-text-error">
          {displayErrorMessage}
        </p>
      )}
    </div>
  );
}
