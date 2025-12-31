import { useState } from 'react';

type SearchProps = {
  state?: 'normal' | 'hover';
  placeholder?: string;
  className?: string;
};

export default function Search({
  state,
  placeholder = '검색어를 입력해주세요.',
  className = ''
}: SearchProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use controlled state prop if provided, otherwise use internal hover state
  const effectiveState = state ?? (isHovered ? 'hover' : 'normal');
  const isNormal = effectiveState === 'normal';

  return (
    <div
      className={`
        bg-[var(--color-bg-neutral-base)]
        border border-solid
        flex gap-1
        h-8
        items-center
        overflow-clip
        px-2
        py-0
        relative
        rounded-[6px]
        w-[184px]
        ${isNormal ? 'border-[var(--color-border-neutral-level1)]' : 'border-[var(--color-border-neutral-level1-hover)]'}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <p
        className={`
          flex-1
          font-["Pretendard",sans-serif]
          leading-[1.6]
          min-h-px min-w-px
          not-italic
          overflow-ellipsis overflow-hidden
          relative
          shrink-0
          text-sm
          text-[var(--color-text-neutral-disabled)]
          whitespace-nowrap
        `}
      >
        {placeholder}
      </p>
    </div>
  );
}
