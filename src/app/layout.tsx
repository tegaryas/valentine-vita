import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const press_start_2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentine Web For Vita",
  description: "Iseng doang ini mah kalau mau yg bagus kapan-kapan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href=".../assets/favicon.png" />
      <body className={press_start_2P.className}>
        <audio id="audio" src=".../assets/music/background-music.mp3" />{" "}
        {children}
      </body>
    </html>
  );
}
