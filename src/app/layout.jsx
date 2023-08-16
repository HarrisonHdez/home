import "./globals.css";

export const metadata = {
  title: "Salvatech - Staffing Solutions",
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
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          async
          media="all"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}