import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Xem Gái Xinh",
  description: "Xem gái xinh, gái đẹp, gái hot, gái sexy, gái xinh việt nam, gái xinh châu á, gái xinh châu âu, gái xinh châu mỹ, gái xinh châu phi, gái xinh châu đại dương, gái xinh châu ấn độ, gái xinh châu nhật bản, gái xinh châu hàn quốc, gái xinh châu thái lan, gái xinh châu la tinh, gái xinh châu nga, gái xinh châu úc, gái xinh châu pháp, gái xinh châu tây ban nha, gái xinh châu bồ đào nha, gái xinh châu đức, gái xinh châu nga, gái xinh châu anh, gái xinh châu scotland, gái xinh châu wales, gái xinh châu bắc ireland, gái xinh châu nam ireland, gái xinh châu thụy điển, gái xinh châu đan mạch, gái xinh châu phần lan, gái xinh châu bỉ, gái xinh châu hà lan, gái xinh châu hy lạp, gái xinh châu thổ nhĩ kỳ, gái xinh châu âu",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="vi">
      <GoogleAnalytics gaId="G-P1S3BJJZQ0" />
      <ThemeRegistry>
        <body className={montserrat.className}>
          <script src="https://www.vipads.live/vn/c-1682-25.js"></script>
          <script src="https://www.vipads.live/vn/c-1682-25.js"></script>
          <script src="https://www.vipads.live/vn/c-1682-25.js"></script>
          <ProvidersContext>{children}</ProvidersContext>
          <script src="https://www.vipads.live/vn/1511643A-7EE2-1683-33-1D02C732238F.blpha"></script>
          <script src="https://www.vipads.live/vn/c-1682-25.js"></script>
          <script src="https://www.vipads.live/vn/c-1682-25.js"></script>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;