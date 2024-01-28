import type { Metadata } from "next";

// Main CSS class
import "../main.scss";

export const metadata: Metadata = {
  title: "Shotitz dashboard",
  description: "Event, Potrait photographer and film maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div>{children}</div>
    </body>
  );
}
