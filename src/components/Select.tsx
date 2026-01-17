import { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = "셀렉트",
  className = "",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setTimeout(() => setIsOpen(false), 150);
        }}
        className={`w-full h-h-5 px-p-4 bg-bg-neutral-base border ${
          isFocused ? "border-border-neutral-level1-hover" : "border-border-neutral-level1"
        } rounded-medium flex items-center justify-between font-pretendard text-typo-body-medium-regular text-text-neutral-base transition-colors`}
      >
        <span className="truncate">
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

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-bg-neutral-surface border border-border-neutral-level1 rounded-medium shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-p-4 py-2 text-left font-pretendard text-typo-body-medium-regular hover:bg-bg-neutral-level1 transition-colors ${
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
    </div>
  );
}
