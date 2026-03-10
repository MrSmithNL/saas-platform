import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard — SaaS Platform",
  description: "Platform administration and tenant management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
