import { useState, forwardRef, type InputHTMLAttributes } from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  error?: boolean;
  errorMessage?: string;
  containerClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  error = false,
  errorMessage,
  placeholder = '텍스트를 입력해주세요.',
  containerClassName = '',
  ...inputProps
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determine border color based on state
  const getBorderClass = () => {
    if (error) {
      return 'border-red-500';
    }
    if (isFocused) {
      return 'border-light-gray-400';
    }
    return 'border-light-gray-200';
  };

  // Determine if error message should be shown
  const showErrorMessage = error && errorMessage;

  return (
    <div className={`flex flex-col gap-1 w-full ${containerClassName}`}>
      <div
        className={`
          flex items-center
          w-full h-8
          px-2
          bg-white
          border
          rounded-md
          transition-colors
          ${getBorderClass()}
        `}
      >
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`
            flex-1
            w-full
            text-sm
            leading-[1.6]
            text-light-gray-900
            placeholder:text-light-gray-400
            bg-transparent
            border-0
            outline-none
            focus:outline-none
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
        />
      </div>

      {showErrorMessage && (
        <div className="flex items-start w-full">
          <p className="text-sm leading-[1.6] text-red-500">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
