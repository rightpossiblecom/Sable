import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Sable",
  description:
    "The household ledger for African families and firms. Accounts, budgets, and receipts that keep wealth on the continent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable} ${inter.className}`}>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
