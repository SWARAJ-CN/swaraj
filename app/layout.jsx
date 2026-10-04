import "./globals.css";

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
      </head>
      <body className="scroll-smooth bg-[#fbfdff] font-[Inter] leading-6 text-[#1a2b3e]">
        {children}
      </body>
    </html>
  );
}
