import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  title: "Global Commodities LLC",
  description: "Premium Agricultural Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}