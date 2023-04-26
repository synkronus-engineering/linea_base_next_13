'use client';
import { Messages } from 'primereact/messages';
import { useEffect, useRef } from 'react';

type MsgProps = {
  severity: 'success' | 'info' | 'warn' | 'error' | undefined;
  summary: string;
  detail?: string;
};

export default function DynamicMsgCmp({ severity, summary, detail }: MsgProps) {
  const msgs = useRef<Messages>(null);

  useEffect(() => {
    msgs.current?.show([
      { sticky: true, severity, summary, detail, closable: false },
    ]);
  }, []);

  return <Messages ref={msgs} />;
}
