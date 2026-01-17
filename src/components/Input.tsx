import { useState, useCallback } from "react";

type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onEnter?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  required?: boolean;
  requiredMessage?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  patternMessage?: string;
  validationRules?: ValidationRule[];
  disabled?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel";
}

export default function Input({
  placeholder = "텍스트를 입력해주세요.",
  value,
  onChange,
  onBlur,
  onEnter,
  error = false,
  errorMessage,
  className = "",
  required = false,
  requiredMessage = "필수 입력 항목입니다.",
  minLength,
  maxLength,
  pattern,
  patternMessage = "올바른 형식이 아닙니다.",
  validationRules = [],
  disabled = false,
  type = "text",
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);

  const validate = useCallback(
    (val: string): string | null => {
      if (required && !val.trim()) {
        return requiredMessage;
      }
      if (minLength && val.length < minLength) {
        return `최소 ${minLength}자 이상 입력해주세요.`;
      }
      if (maxLength && val.length > maxLength) {
        return `최대 ${maxLength}자까지 입력 가능합니다.`;
      }
      if (pattern && !pattern.test(val)) {
        return patternMessage;
      }
      if (type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        return "올바른 이메일 형식이 아닙니다.";
      }
      for (const rule of validationRules) {
        if (!rule.validate(val)) {
          return rule.message;
        }
      }
      return null;
    },
    [required, requiredMessage, minLength, maxLength, pattern, patternMessage, type, validationRules]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    if (touched) {
      setInternalError(validate(newValue));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTouched(true);
    const validationError = validate(value || "");
    setInternalError(validationError);
    onBlur?.(value || "");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnter) {
      onEnter(value || "");
    }
  };

  const displayError = error || (touched && internalError !== null);
  const displayErrorMessage = errorMessage || internalError;

  const borderColor = displayError
    ? "border-input-border-error"
    : isFocused
      ? "border-input-border-hover"
      : "border-input-border-base";

  return (
    <div className={`flex flex-col gap-p-2 w-full ${className}`}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={`h-h-5 px-p-4 bg-input-bg-base border ${borderColor} rounded-medium font-pretendard text-typo-body-medium-regular text-input-text-normal placeholder:text-input-text-disabled outline-none transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {displayError && displayErrorMessage && (
        <p className="font-pretendard text-typo-body-medium-regular text-input-text-error">
          {displayErrorMessage}
        </p>
      )}
    </div>
  );
}
