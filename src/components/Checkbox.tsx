import { useState, InputHTMLAttributes } from 'react';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> & {
  label?: string | React.ReactNode;
  containerClassName?: string;
};

export default function Checkbox({
  label = '체크박스',
  disabled = false,
  checked: controlledChecked,
  onChange,
  containerClassName = '',
  ...inputProps
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Use controlled value if provided, otherwise use internal state
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;

    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }

    onChange?.(e);
  };

  // Determine checkbox box styles
  const getCheckboxBoxClass = () => {
    if (isChecked) {
      return disabled
        ? 'bg-light-gray-300 border-light-gray-300'
        : 'bg-light-primary-500 border-light-primary-500';
    }

    if (disabled) {
      return 'bg-light-gray-100 border-light-gray-400';
    }

    return isHovered
      ? 'bg-white border-light-gray-400'
      : 'bg-white border-light-gray-200';
  };

  // Determine label text color
  const getLabelTextClass = () => {
    return disabled ? 'text-light-gray-400' : 'text-light-gray-900';
  };

  return (
    <label
      className={`
        flex items-center gap-[6px]
        cursor-pointer
        ${disabled ? 'cursor-not-allowed' : ''}
        ${containerClassName}
      `}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          {...inputProps}
        />
        <div
          className={`
            w-4 h-4
            border
            rounded
            transition-colors
            flex items-center justify-center
            ${getCheckboxBoxClass()}
          `}
        >
          {isChecked && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={disabled ? 'text-white' : 'text-white'}
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {label && (
        <span
          className={`
            text-sm
            leading-[1.6]
            ${getLabelTextClass()}
          `}
        >
          {label}
        </span>
      )}
    </label>
  );
}
