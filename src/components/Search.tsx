import { useState } from "react";

interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
}

export default function Search({
  placeholder = "검색어를 입력해주세요.",
  value,
  onChange,
  onSearch,
  className = "",
}: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch && value) {
      onSearch(value);
    }
  };

  return (
    <div
      className={`flex items-center gap-p-2 h-h-5 px-p-4 bg-bg-neutral-base border ${
        isFocused ? "border-border-neutral-level1-hover" : "border-border-neutral-level1"
      } rounded-medium transition-colors w-full ${className}`}
    >
      <svg
        className="w-4 h-4 text-icon-neutral-level1 shrink-0"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle
          cx="7"
          cy="7"
          r="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 11L14 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent font-pretendard text-typo-body-medium-regular text-text-neutral-base placeholder:text-text-neutral-disabled outline-none min-w-0"
      />
    </div>
  );
}
