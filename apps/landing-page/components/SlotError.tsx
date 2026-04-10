'use client';

import { useEffect, useRef } from 'react';

interface SlotErrorProps {
  reset: () => void;
  slotName:
    | 'agents'
    | 'quick start'
    | 'hero'
    | 'before after'
    | 'features'
    | 'supported tools'
    | 'tui-dashboard'
    | 'footer';
}

export const SlotError = ({ reset, slotName }: SlotErrorProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <section role="alert" aria-live="assertive">
      <h2>{slotName} 加载失败</h2>
      <p>出现了一些问题，请重试。</p>
      <button
        ref={buttonRef}
        onClick={reset}
        type="button"
        aria-label={`重新加载 ${slotName}`}
      >
        重试
      </button>
    </section>
  );
};
