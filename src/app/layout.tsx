import type { Metadata } from "next";

import "./main.scss";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shotitz photography | Event, Potrait Photographer and Film Maker",
  description: " Event, Potrait photographer and film maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="py-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
