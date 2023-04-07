'use client';
import { ReactNode, useEffect, useState } from 'react';

type PageProps = { children: ReactNode; fallback?: any };

export default function HasMounted({ children, fallback }: PageProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return fallback || null;

  return <>{children}</>;
}
