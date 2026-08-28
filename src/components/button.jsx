const baseClasses = 'inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold outline-none transition-[background-color,border-color,box-shadow,color] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses = {
  solid: 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600',
  outline: 'border border-slate-300 bg-white text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-slate-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
};

const sizeClasses = {
  xl: 'px-5 py-3 text-base',
  lg: 'px-[18px] py-2.5 text-sm',
  md: 'px-3.5 py-2.5 text-sm',
  sm: 'px-3 py-2 text-xs',
};

const iconSizes = {
  xl: 'size-5',
  lg: 'size-[18px]',
  md: 'size-4',
  sm: 'size-3.5',
};

export default function Button({
  variant = 'solid',
  size = 'md',
  icon,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  const resolvedVariant = variantClasses[variant] ? variant : 'solid';
  const resolvedSize = sizeClasses[size] ? size : 'md';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[resolvedVariant]} ${sizeClasses[resolvedSize]} ${className}`}
      {...props}
    >
      {icon && <span aria-hidden="true" className={`flex shrink-0 items-center justify-center ${iconSizes[resolvedSize]} [&>svg]:size-full`}>{icon}</span>}
      {children}
    </button>
  );
}
