import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Violet AbdulKadir Foundation | Empowering Youths & Women",
  description:
    "VAF empowers youths and women through education, economic opportunities, and specialised training to build a better standard of living.",
  icons: {
    icon:"/vaf_logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
