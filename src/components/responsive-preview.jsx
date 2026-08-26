'use client';

import { useEffect, useRef, useState } from 'react';

const MIN_WIDTH = 320;
const HANDLE_SPACE = 24;

function clampWidth(width, maxWidth) {
  return Math.min(Math.max(width, MIN_WIDTH), Math.max(MIN_WIDTH, maxWidth));
}

export default function ResponsivePreview({ children, dark = false, fitContent = false }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const draggingRef = useRef(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width;
      setContainerWidth(nextWidth);
      setCanvasWidth((currentWidth) => currentWidth === null
        ? Math.max(MIN_WIDTH, nextWidth - HANDLE_SPACE)
        : clampWidth(currentWidth, nextWidth - HANDLE_SPACE));
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  function updateWidth(clientX) {
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;

    const nextWidth = clampWidth(clientX - canvasRect.left, containerWidth - HANDLE_SPACE);
    setCanvasWidth(nextWidth);
  }

  function handlePointerDown(event) {
    event.preventDefault();
    draggingRef.current = true;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (draggingRef.current) updateWidth(event.clientX);
  }

  function handlePointerUp(event) {
    draggingRef.current = false;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event) {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;

    event.preventDefault();
    const currentWidth = canvasWidth ?? containerWidth - HANDLE_SPACE;
    const direction = event.key === 'ArrowRight' ? 40 : -40;
    const nextWidth = clampWidth(currentWidth + direction, containerWidth - HANDLE_SPACE);
    setCanvasWidth(nextWidth);
  }

  const widthLabel = canvasWidth && canvasWidth < containerWidth - 30
    ? `${Math.round(canvasWidth)}px`
    : 'Fluid';
  const handleClasses = dark
    ? 'border-white/15 bg-slate-400/80 hover:bg-cyan-200'
    : 'border-slate-300 bg-slate-400 hover:bg-slate-600';

  return (
    <div ref={containerRef} className={`relative overflow-visible rounded-xl ${fitContent ? 'min-h-0' : 'min-h-[420px]'} ${dragging ? 'cursor-ew-resize select-none' : ''}`}>
      <div className={`flex min-w-full justify-center ${fitContent ? 'items-center' : 'min-h-[420px] items-start'}`}>
        <div
          ref={canvasRef}
          className="nexo-preview-canvas min-w-0 shrink-0"
          style={{ width: canvasWidth ? `${canvasWidth}px` : '100%' }}
        >
          {children}
        </div>
        <button
          type="button"
          aria-label="Resize responsive preview"
          title={`Resize preview · ${widthLabel}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="group flex w-6 shrink-0 cursor-ew-resize touch-none items-center justify-center self-stretch focus:outline-none"
        >
          <span className={`h-10 w-1.5 rounded-full border transition group-focus-visible:ring-2 group-focus-visible:ring-cyan-300 ${handleClasses}`} />
        </button>
      </div>
    </div>
  );
}
