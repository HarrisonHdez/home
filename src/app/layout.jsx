import "./globals.css";

export const metadata = {
  title: "Home - Staffing Solutions",
  description:
    "Build your team abroad and level-up your business, Unlock the full potential of your business with our pre-vetted talent pool and advanced tech solutions",
  keywords: "business, team, solutions, potential, Salvatech",
  author: "Harrison Hdez",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          async
          media="all"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
