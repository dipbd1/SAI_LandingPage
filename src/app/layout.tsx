import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header";
import {Footer} from "@/components/footer";


export const metadata: Metadata = {
    title: "Where Simplicity Meets Genius",
    description: "Simple AI",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="tw-dark">
        <body
            className={`antialiased tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] 
            tw-text-black dark:tw-bg-black  dark:tw-text-white`}
        >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
