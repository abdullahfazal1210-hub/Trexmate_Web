import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Trexmate - Award-Winning Digital Agency",
  description: "Transforming ideas into stunning, high-performance digital products that make an impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
