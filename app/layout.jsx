import "../styles/style.css";

export const metadata = {
  title: "swaraj cn",
  description:
    "Swaraj CN, MERN full stack developer passionate about full-stack web, cybersecurity, UI craft, and Linux internals.",
  icons: {
    icon: "/favicon/my-category-svgrepo-com.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Quintessential&family=Rouge+Script&family=Molle:ital@1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
