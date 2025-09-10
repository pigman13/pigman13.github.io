"use client";
import { useEffect, useState } from "react";

/**
 * components/animations/ClientOnly.tsx
 * 
 * Purpose: Prevents hydration errors by only rendering children on the client side.
 * Contains: Wrapper component that ensures client-side only rendering.
 * Core functionalities: Eliminates SSR/client mismatch issues for interactive components.
 */

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
