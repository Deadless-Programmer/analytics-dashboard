import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Analytics Dashboard",
  description: "Admin Analytics Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}