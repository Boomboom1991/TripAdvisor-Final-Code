import "./globals.css";
import { Inter } from "next/font/google";
import NavbarSimple from "@/components/navbar/index";
import Footer from "@/components/footer/index";
import CityBreadcrumb from "@/components/CityBreadcrumb";

const inter = Inter({ subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="border-b border-1 shadow-sm mb-5 md:mb-0">
          <NavbarSimple />
        </div>
        {/* <div className="max-w-7xl flex-col rounded-2xl mx-auto block md:flex bg-[] p-1 space-x-1 my-10">
          <span className="font-bold text-xl">Выберите регион и город</span>
          <CityBreadcrumb />
        </div> */}

        <div className="z-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
