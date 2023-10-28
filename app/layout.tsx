import "@/app/ui/global.css";
import { ReactNode } from "react";
import { inter } from "@/app/ui/fonts";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
