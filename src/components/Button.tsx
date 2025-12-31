import { useState } from 'react';

type ButtonProps = {
  type?: 'primary' | 'normal' | 'ghost' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  type = 'primary',
  children = 'Button',
  onClick,
  className = ''
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine background classes based on type and hover state
  const getBackgroundClasses = () => {
    if (type === 'primary') {
      return isHovered
        ? 'bg-light-primary-600' // btn/bg/primary/hover equivalent
        : 'bg-light-primary-500'; // btn/bg/primary/base equivalent
    }

    if (type === 'secondary') {
      return isHovered
        ? 'bg-light-gray-100 border border-light-primary-500'
        : 'bg-white border border-light-primary-500';
    }

    if (type === 'normal') {
      return isHovered
        ? 'bg-light-gray-100 border border-light-gray-400'
        : 'bg-white border border-light-gray-400';
    }

    if (type === 'ghost') {
      return isHovered
        ? 'bg-light-gray-100'
        : 'bg-white';
    }

    return '';
  };

  // Determine text color based on type
  const getTextClasses = () => {
    if (type === 'primary') {
      return 'text-white';
    }

    if (type === 'secondary') {
      return 'text-light-primary-500';
    }

    return 'text-light-gray-900';
  };

  return (
    <button
      className={`
        flex items-center justify-center
        h-8
        px-3
        rounded-md
        font-medium text-sm
        leading-[1.6]
        transition-colors
        ${getBackgroundClasses()}
        ${getTextClasses()}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
