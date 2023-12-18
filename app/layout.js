import "./globals.css";

export const metadata = {
  title: "NextJS Recipe Share App",
  description: "A Recipe Sharing App built with NextJS!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
