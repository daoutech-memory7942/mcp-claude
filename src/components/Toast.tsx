type ToastProps = {
  type?: 'success' | 'fail';
  message?: string;
  className?: string;
};

export default function Toast({
  type = 'success',
  message,
  className = ''
}: ToastProps) {
  const isSuccess = type === 'success';
  const isFail = type === 'fail';

  // Default messages
  const defaultMessage = isSuccess
    ? '게시글이 정상적으로 등록되었습니다.'
    : '파일 업로드 용량을 초과하였습니다.';

  const displayMessage = message ?? defaultMessage;

  return (
    <div
      className={`
        border border-solid
        flex gap-1
        items-center
        overflow-clip
        px-4
        py-3
        relative
        rounded-[12px]
        w-[320px]
        ${isSuccess ? 'bg-[var(--color-bg-status-positive)] border-[var(--color-border-status-positive)]' : ''}
        ${isFail ? 'bg-[var(--color-bg-status-negative)] border-[var(--color-border-status-negative)]' : ''}
        ${className}
      `}
    >
      {/* Success Icon */}
      {isSuccess && (
        <div className="relative shrink-0 size-5">
          <svg
            className="block max-w-none size-full"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
              d="M14.5 7L8.5 13L5.5 10"
              stroke="#03C759"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Message */}
      <p
        className={`
          flex-1
          font-['Pretendard',sans-serif]
          leading-[1.5]
          min-h-px min-w-px
          not-italic
          overflow-ellipsis overflow-hidden
          relative
          shrink-0
          text-base
          text-[var(--color-text-neutral-white)]
          whitespace-nowrap
        `}
      >
        {displayMessage}
      </p>

      {/* Fail Icon */}
      {isFail && (
        <div className="relative shrink-0 size-5">
          <svg
            className="block max-w-none size-full"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
              d="M10 6V10"
              stroke="#DC3545"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="10" cy="13" r="0.5" fill="#DC3545" stroke="#DC3545" />
          </svg>
        </div>
      )}
    </div>
  );
}
