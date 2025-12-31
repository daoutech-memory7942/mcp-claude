import { useState } from 'react';

type ToggleProps = {
  label?: boolean | string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export default function Toggle({
  label = true,
  disabled = false,
  checked: controlledChecked,
  onChange,
  className = ''
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  // Use controlled value if provided, otherwise use internal state
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;

    if (controlledChecked === undefined) {
      setInternalChecked(newValue);
    }

    onChange?.(newValue);
  };

  // Determine toggle background color
  const getToggleBackgroundClass = () => {
    if (disabled) {
      return isChecked ? 'bg-light-gray-300' : 'bg-light-gray-100';
    }
    return isChecked ? 'bg-light-primary-500' : 'bg-light-gray-100';
  };

  // Determine toggle knob position
  const getKnobPositionClass = () => {
    return isChecked ? 'translate-x-[14px]' : 'translate-x-[2px]';
  };

  // Determine label text color
  const getLabelTextClass = () => {
    return disabled ? 'text-light-gray-400' : 'text-light-gray-900';
  };

  // Default label text
  const labelText = typeof label === 'string' ? label : '토글버튼';
  const showLabel = label !== false;

  return (
    <div className={`flex items-center gap-[6px] ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleToggle}
        className={`
          relative
          w-8 h-5
          rounded-full
          transition-colors
          ${getToggleBackgroundClass()}
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {/* Toggle knob */}
        <span
          className={`
            absolute
            top-[2px]
            w-4 h-4
            bg-white
            rounded-full
            transition-transform
            shadow-sm
            ${getKnobPositionClass()}
          `}
        />
      </button>

      {showLabel && (
        <span
          className={`
            text-sm
            leading-[1.6]
            ${getLabelTextClass()}
          `}
        >
          {labelText}
        </span>
      )}
    </div>
  );
}
