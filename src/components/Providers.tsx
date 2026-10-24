"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position="bottom-right" toastOptions={{
        style: { background: 'var(--card)', color: 'var(--foreground)', backdropFilter: 'blur(10px)', border: '1px solid var(--border)', fontWeight: 'bold' }
      }} />
    </ThemeProvider>
  );
}