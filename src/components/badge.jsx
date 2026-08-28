const sizeClasses = {
  md: 'px-2 py-1 text-xs',
  sm: 'px-1.5 py-0.5 text-[10px]',
};

const borderlessToneClasses = {
  accent: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200',
  neutral: 'bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-slate-300',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300',
  success: 'bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-300',
  error: 'bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300',
  purple: 'bg-purple-100 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300',
  pink: 'bg-pink-100 text-pink-700 dark:bg-pink-400/10 dark:text-pink-300',
};

const borderedToneClasses = {
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

const borderClasses = {
  accent: 'border-cyan-200 dark:border-cyan-400/40',
  neutral: 'border-gray-200 dark:border-slate-600',
  info: 'border-blue-200 dark:border-blue-400/40',
  success: 'border-green-200 dark:border-green-400/40',
  warning: 'border-yellow-300 dark:border-yellow-400/40',
  error: 'border-red-200 dark:border-red-400/40',
  indigo: 'border-indigo-200 dark:border-indigo-400/40',
  purple: 'border-purple-200 dark:border-purple-400/40',
  pink: 'border-pink-200 dark:border-pink-400/40',
};

export default function Badge({ size = 'md', tone = 'accent', rounded = false, bordered = false, children, className = '', ...props }) {
  const resolvedSize = sizeClasses[size] ? size : 'md';
  const resolvedTone = borderlessToneClasses[tone] ? tone : 'accent';
  const radiusClass = rounded ? 'rounded-full' : 'rounded-md';
  const borderClass = bordered ? `border ${borderClasses[resolvedTone]}` : '';
  const toneClass = (bordered ? borderedToneClasses : borderlessToneClasses)[resolvedTone];

  return (
    <span
      className={`inline-flex items-center ${radiusClass} font-medium ${toneClass} ${borderClass} ${sizeClasses[resolvedSize]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
