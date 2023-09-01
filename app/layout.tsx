import { Footer, Navbar } from "@/components";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nike",
  description:
    "We&apos;re the leading sports brand in the world because we keep athletes at the center of everything we do. We empower people through innovative products ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="body__wrapper relative">
        <header className="header__section max-container">
          <Navbar />
        </header>
        {children}
        <footer className="footer__section bg-black ">
          <Footer />
        </footer>
        </div>
      
      </body>
    </html>
  );
}
