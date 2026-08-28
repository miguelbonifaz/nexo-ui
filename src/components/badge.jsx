const sizeClasses = {
  md: 'px-2 py-1 text-xs',
  sm: 'px-1.5 py-0.5 text-[10px]',
};

const toneClasses = {
  accent: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200',
  neutral: 'bg-gray-50 text-gray-600 dark:bg-slate-800 dark:text-slate-300',
  info: 'bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
  success: 'bg-green-50 text-green-700 dark:bg-green-400/10 dark:text-green-300',
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-300',
  error: 'bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-300',
  indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300',
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300',
  pink: 'bg-pink-50 text-pink-700 dark:bg-pink-400/10 dark:text-pink-300',
};

export default function Badge({ size = 'md', tone = 'accent', children, className = '', ...props }) {
  const resolvedSize = sizeClasses[size] ? size : 'md';
  const resolvedTone = toneClasses[tone] ? tone : 'accent';

  return (
    <span
      className={`inline-flex items-center rounded-md font-medium ${toneClasses[resolvedTone]} ${sizeClasses[resolvedSize]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
