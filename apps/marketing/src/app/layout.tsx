import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Platform",
  description: "Build, launch, and grow your SaaS business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
