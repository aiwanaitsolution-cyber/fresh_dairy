import "./globals.css";
import SiteProvider from "@/components/SiteProvider";
import RouteShell from "@/components/RouteShell";
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
          <RouteShell>{children}</RouteShell>
        </SiteProvider>
      </body>
    </html>
  );
}
