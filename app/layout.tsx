import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "@/libs/auth/provider";
import "./globals.css";

const monserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neo Siakad",
  description: "Neo Siakad Universitas Islam Nusantara",
  icons: {
    icon: "./favicon.ico",
  },
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={monserat.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
