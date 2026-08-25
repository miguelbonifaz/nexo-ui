import { ImageResponse } from 'next/og';

export const socialImageSize = { width: 1200, height: 630 };

export function createSocialImage() {
  return new ImageResponse(
    <div style={{ background: '#070a10', color: '#f8fafc', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '70px', width: '100%' }}>
      <div style={{ color: '#67e8f9', display: 'flex', fontSize: 28, fontWeight: 700, letterSpacing: '0.14em' }}>NEXO UI</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1.05 }}>React &amp; Tailwind CSS Components</div>
        <div style={{ color: '#94a3b8', fontSize: 28 }}>Copy-ready interfaces with live previews.</div>
      </div>
      <div style={{ color: '#64748b', display: 'flex', fontSize: 20 }}>nexo-ui</div>
    </div>,
    socialImageSize,
  );
}
