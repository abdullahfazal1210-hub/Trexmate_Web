import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Trexmate",
  description: "Transforming ideas into stunning, high-performance digital products that make an impact.",
  icons: {
    icon: "/trexmatewhite.png", // "/public" hata dein
  },
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
