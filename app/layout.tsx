import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Truyện Sex Link",
  description: "Truyện sex hay mỗi ngày | Đọc càng nhiều, đụ càng giỏi! - SexLink.Online",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="vi">
      <Head>
        {/* Google Analytics script here */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P6ZGQH84PP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P6ZGQH84PP', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* End Google Analytics script */}
      </Head>
      <ThemeRegistry>
        <body className={montserrat.className}>
          <ProvidersContext>{children}</ProvidersContext>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
