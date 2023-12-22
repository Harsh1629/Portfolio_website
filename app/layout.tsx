import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

//page description
export const metadata = {
  title: "Harsh Portfolio ",
  description: "Created using Next.js, Framer Motion, TypeScript, Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={
          "${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
        }
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-purple-300 "></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <Toaster position="top-right" />
        
      </body>
    </html>
  );
}

//using the two division we actually gave the red blue background
// use of <Header /> function created in header.tsx in components folder in order to reflect the changes done in header.tsx --> for that first we need to import it

// use of @ --> to avoid writing much ./..../.../ basically @ tells that it starts from the route in this case it portfolio webite

//since Header function is deafult export hence we were able to use it without curly braces otherwise we have to import {Header} from '@/components/header';
