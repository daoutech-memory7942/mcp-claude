import { forwardRef, SelectHTMLAttributes, useState } from 'react';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> & {
  options?: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  options = [],
  placeholder = '셀렉트',
  containerClassName = '',
  ...selectProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determine border color based on state
  const getBorderClass = () => {
    return isFocused ? 'border-light-gray-400' : 'border-light-gray-200';
  };

  return (
    <div className={`relative w-full ${containerClassName}`}>
      <div
        className={`
          relative
          flex items-center justify-between
          w-full h-[30px]
          px-2
          bg-white
          border
          rounded-md
          transition-colors
          ${getBorderClass()}
        `}
      >
        <select
          ref={ref}
          className={`
            flex-1
            w-full
            pr-6
            text-sm
            leading-[1.6]
            text-light-gray-900
            bg-transparent
            border-0
            outline-none
            appearance-none
            cursor-pointer
            focus:outline-none
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...selectProps}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron Down Icon */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-light-gray-900"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
