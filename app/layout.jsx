import "./globals.css";
import SiteProvider from "@/components/SiteProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEffects from "@/components/MotionEffects";
export const metadata = {
  title: {
    default: "FreshDay | Dairy delivered home",
    template: "%s | FreshDay",
  },
  description:
    "Original glass-bottled A2 milk, Paneer, Chhach, Dahi, White Butter, Desi Ghee and Khoya. Enquire about FreshDay home delivery.",
};
export const viewport = {
  themeColor: "#0968b5",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home-page delivery-site antialiased">
        <SiteProvider>
          <Header />
          <MotionEffects />
          <main id="main">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
