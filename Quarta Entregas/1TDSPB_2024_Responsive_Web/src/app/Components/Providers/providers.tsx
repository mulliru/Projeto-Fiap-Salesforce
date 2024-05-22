// providers.tsx | providers.jsx

"use client";

import VLibras from "react-vlibras";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VLibras safeInit />
      {children}
    </>
  );
}