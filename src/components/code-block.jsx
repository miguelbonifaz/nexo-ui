import { Highlight } from 'prism-react-renderer';

const nexoTheme = {
  plain: {
    backgroundColor: '#111927',
    color: '#cbd5e1',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#64748b', fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: '#94a3b8' } },
      { types: ['property', 'tag', 'symbol'], style: { color: '#67e8f9' } },
      { types: ['selector', 'attr-name', 'string', 'char', 'builtin'], style: { color: '#fbbf24' } },
      { types: ['operator', 'entity', 'url', 'variable'], style: { color: '#a78bfa' } },
      { types: ['atrule', 'keyword', 'function', 'class-name'], style: { color: '#c084fc' } },
      { types: ['boolean', 'number', 'constant', 'attr-value', 'regex', 'important', 'inserted', 'deleted'], style: { color: '#34d399' } },
  ],
};

function tokenSignature(token) {
  return `${token.types.join(',')}:${token.content}`;
}

function stableKey(signature, occurrences) {
  const occurrence = occurrences.get(signature) ?? 0;
  occurrences.set(signature, occurrence + 1);
  return `${signature}-${occurrence}`;
}

export default function CodeBlock({ code }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111927] shadow-[0_16px_50px_rgb(2_6_23/0.18)]">
      <div className="flex items-center justify-between border-b border-slate-700/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-300/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
          JSX
        </span>
      </div>
      <Highlight theme={nexoTheme} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`code-scroll max-h-[620px] overflow-auto px-4 py-5 text-[12px] leading-6 sm:px-6 sm:text-[13px] ${className}`}
            style={style}
          >
            <code>
              {(() => {
                const lineOccurrences = new Map();

                return tokens.map((line, index) => {
                  const lineSignature = line.map(tokenSignature).join('|');
                  const lineProps = getLineProps({ line });
                  const tokenOccurrences = new Map();

                  return (
                    <span
                      key={stableKey(lineSignature, lineOccurrences)}
                      {...lineProps}
                      className={`flex min-w-max ${lineProps.className ?? ''}`}
                    >
                      <span className="mr-5 w-7 shrink-0 select-none text-right text-slate-600">{index + 1}</span>
                      <span>
                        {line.map((token) => (
                          <span key={stableKey(tokenSignature(token), tokenOccurrences)} {...getTokenProps({ token })} />
                        ))}
                      </span>
                    </span>
                  );
                });
              })()}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
