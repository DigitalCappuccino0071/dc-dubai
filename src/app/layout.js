import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
const roboto = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "700"],
});
export const metadata = {
    title: "Digital Marketing Agency in dubai - Digital Cappuccino",
    description:
        "Digital Cappuccino is the best marketing agency in dubai. We synthesize marketing programs and merge techniques to reach your goals.",
    keywords:
        "marketing agency, digital marketing agency, online marketing agency, advertising agency, seo marketing, digital marketing company, marketing companies, branding agency, marketing agency near me, ad agency, advertising company",
    verification: {
        google: "bUnGdZ9PTMjlg79GOjeKDVDEapQ9UrcLSyDVKOmTwK4",
    },
    metadataBase: new URL("https://www.digitalcappuccino.ca/"),

    alternates: {
        canonical: `/`,
    },

    openGraph: {
        url: `/`,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ReactQueryProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ReactQueryProvider>
                <GoogleTagManager gtmId="G-X2FK81WDG7" />
                <GoogleAnalytics gaId="G-X2FK81WDG7" />
            </body>
        </html>
    );
}
