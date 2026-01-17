import { useState, useRef, useEffect } from "react";
import Search from "./Search";
import Checkbox from "./Checkbox";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

export default function Dropdown({
  options,
  value = [],
  onChange,
  placeholder = "선택하세요",
  searchPlaceholder = "검색어를 입력해주세요.",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleToggle = (optionValue: string) => {
    if (!onChange) return;

    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const selectedLabels = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label)
    .join(", ");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-h-5 px-p-4 bg-bg-neutral-base border border-border-neutral-level1 rounded-medium flex items-center justify-between font-pretendard text-typo-body-medium-regular text-text-neutral-base hover:border-border-neutral-level1-hover transition-colors"
      >
        <span className="truncate">
          {selectedLabels || placeholder}
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
          <div className="p-2">
            <Search
              value={searchValue}
              onChange={setSearchValue}
              placeholder={searchPlaceholder}
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 hover:bg-bg-neutral-level1 transition-colors"
              >
                <Checkbox
                  label={option.label}
                  checked={value.includes(option.value)}
                  onChange={() => handleToggle(option.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
