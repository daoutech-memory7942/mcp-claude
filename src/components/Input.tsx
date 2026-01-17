import { useState } from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

export default function Input({
  placeholder = "텍스트를 입력해주세요.",
  value,
  onChange,
  error = false,
  errorMessage,
  className = "",
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error
    ? "border-input-border-error"
    : isFocused
      ? "border-input-border-hover"
      : "border-input-border-base";

  return (
    <div className={`flex flex-col gap-p-2 w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`h-h-5 px-p-4 bg-input-bg-base border ${borderColor} rounded-medium font-pretendard text-typo-body-medium-regular text-input-text-normal placeholder:text-input-text-disabled outline-none transition-colors`}
      />
      {error && errorMessage && (
        <p className="font-pretendard text-typo-body-medium-regular text-input-text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
