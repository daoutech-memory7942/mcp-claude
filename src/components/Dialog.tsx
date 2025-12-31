import Search from './Search';
import Button from './Button';

type DialogProps = {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  className?: string;
};

export default function Dialog({
  title = '캘린더뷰 추가',
  description = '캘린더뷰에 등록될 항목들을 체크해주세요.',
  cancelText = '취소',
  confirmText = '삭제하기',
  onCancel,
  onConfirm,
  className = ''
}: DialogProps) {
  return (
    <div
      className={`
        bg-[var(--color-bg-neutral-base)]
        flex flex-col
        gap-2
        items-start
        overflow-clip
        px-5
        py-6
        relative
        rounded-lg
        size-full
        ${className}
      `}
      data-name="dialog"
    >
      {/* Title */}
      <p
        className="
          font-['Pretendard',sans-serif]
          font-medium
          leading-[1.5]
          not-italic
          relative
          shrink-0
          text-[var(--color-text-neutral-base)]
          text-xl
          w-full
          whitespace-pre-wrap
        "
      >
        {title}
      </p>

      {/* Contents */}
      <div
        className="
          flex flex-col
          gap-2
          items-center
          justify-center
          relative
          shrink-0
          w-full
        "
        data-name="contents"
      >
        <p
          className="
            font-['Pretendard',sans-serif]
            leading-[1.6]
            not-italic
            relative
            shrink-0
            text-[var(--color-text-neutral-description)]
            text-sm
            w-full
            whitespace-pre-wrap
          "
        >
          {description}
        </p>
        <Search state="normal" className="w-full" />
      </div>

      {/* Bottom Buttons */}
      <div
        className="
          flex
          gap-1.5
          items-start
          justify-end
          pb-0
          pt-4
          px-0
          relative
          shrink-0
          w-full
        "
        data-name="bottom-btn"
      >
        <Button type="secondary" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button type="primary" onClick={onConfirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  );
}
