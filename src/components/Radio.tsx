interface RadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  className?: string;
}

export default function Radio({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
  className = "",
}: RadioProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(true);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-p-3 cursor-pointer ${disabled ? "cursor-not-allowed" : ""} ${className}`}
      onClick={handleClick}
    >
      <div
        className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
          checked
            ? disabled
              ? "bg-control-bg-disabled-checked"
              : "bg-control-bg-normal border-[1.5px] border-control-border-primary"
            : disabled
              ? "bg-control-bg-disabled border border-control-border-level1-hover"
              : "bg-control-bg-normal border border-control-border-level1 hover:border-control-border-level1-hover"
        }`}
      >
        {checked && !disabled && (
          <div className="w-[6px] h-[6px] rounded-full bg-control-bg-primary" />
        )}
        {checked && disabled && (
          <div className="w-[6px] h-[6px] rounded-full bg-white" />
        )}
      </div>
      {label && (
        <span
          className={`font-pretendard text-typo-body-medium-regular ${
            disabled ? "text-text-neutral-disabled" : "text-text-neutral-base"
          }`}
        >
          {label}
        </span>
      )}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
        className="sr-only"
      />
    </div>
  );
}
