import { useState } from 'react';
import Search from './Search';
import Checkbox from './Checkbox';

export type DropdownOption = {
  value: string;
  label: string;
  checked?: boolean;
};

type DropdownProps = {
  options: DropdownOption[];
  onChange?: (selectedValues: string[]) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  className?: string;
};

export default function Dropdown({
  options,
  onChange,
  searchable = true,
  searchPlaceholder = '검색어를 입력해주세요.',
  className = ''
}: DropdownProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(
    options.filter((opt) => opt.checked).map((opt) => opt.value)
  );

  // Filter options based on search query
  const filteredOptions = searchQuery
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newSelectedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value);

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  return (
    <div
      className={`
        bg-[var(--color-bg-neutral-surface)]
        flex flex-col gap-[10px]
        items-start
        overflow-clip
        p-3
        relative
        rounded-[12px]
        shadow-[0px_4px_20px_0px_rgba(0,0,0,0.16)]
        w-[220px]
        ${className}
      `}
    >
      {/* Search Field */}
      {searchable && (
        <div className="w-full">
          <div
            className="
              bg-[var(--color-bg-neutral-surface)]
              border border-[var(--color-border-neutral-level1)]
              border-solid
              flex gap-1
              h-8
              items-center
              overflow-clip
              px-2
              py-0
              relative
              rounded-[6px]
              w-full
            "
          >
            <div className="relative shrink-0 size-4">
              <svg
                className="block max-w-none size-full"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#A7B9CC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 14L11.1 11.1"
                  stroke="#A7B9CC"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                flex-1
                font-['Pretendard',sans-serif]
                leading-[1.6]
                min-h-px min-w-px
                not-italic
                overflow-ellipsis overflow-hidden
                relative
                shrink-0
                text-sm
                text-[var(--color-text-neutral-base)]
                placeholder:text-[var(--color-text-neutral-disabled)]
                whitespace-nowrap
                bg-transparent
                border-none
                outline-none
              "
            />
          </div>
        </div>
      )}

      {/* Checkbox List */}
      <div className="flex flex-col gap-1 items-start w-full">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <div
              key={option.value}
              className="flex gap-[6px] h-7 items-center w-[184px]"
            >
              <Checkbox
                checked={selectedValues.includes(option.value)}
                onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                label={option.label}
              />
            </div>
          ))
        ) : (
          <p className="text-sm text-[var(--color-text-neutral-disabled)] py-2">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
