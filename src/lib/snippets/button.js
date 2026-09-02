const solidStyles = {
  xl: 'rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  lg: 'rounded-md bg-indigo-600 px-[18px] py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  md: 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  sm: 'rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
};

const outlineStyles = {
  xl: 'rounded-md border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  lg: 'rounded-md border border-slate-300 bg-white px-[18px] py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  md: 'rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  sm: 'rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
};

export const solidButtonSnippet = String.raw`export default function SolidButtonExample() {
  return (
    <>
      <button
        type="button"
        className="${solidStyles.xl}"
      >
        XL button
      </button>
      <button
        type="button"
        className="${solidStyles.lg}"
      >
        LG button
      </button>
      <button
        type="button"
        className="${solidStyles.md}"
      >
        MD button
      </button>
      <button
        type="button"
        className="${solidStyles.sm}"
      >
        SM button
      </button>
    </>
  );
}`;

export const outlineButtonSnippet = String.raw`export default function OutlineButtonExample() {
  return (
    <>
      <button
        type="button"
        className="${outlineStyles.xl}"
      >
        XL button
      </button>
      <button
        type="button"
        className="${outlineStyles.lg}"
      >
        LG button
      </button>
      <button
        type="button"
        className="${outlineStyles.md}"
      >
        MD button
      </button>
      <button
        type="button"
        className="${outlineStyles.sm}"
      >
        SM button
      </button>
    </>
  );
}`;
