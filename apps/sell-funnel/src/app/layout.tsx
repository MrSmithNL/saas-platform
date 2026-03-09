import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Funnel — AI-Powered Sales Funnels",
  description:
    "Build high-converting sales funnels with AI. Landing pages, conversion tracking, and A/B testing for any industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
