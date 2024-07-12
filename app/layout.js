import { Inter,Poppins } from "next/font/google";
import "./globals.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToasterProvider } from "@/providers/ToasterContext";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Cofie Bekoe Ministries",
  description: "Following Christ's Path - Jesus to the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToasterProvider>
        {children}
        </ToasterProvider>
        </body>
    </html>
  );
}
