import Image from "next/image";
import { Inter } from "next/font/google";
import MainPage from "@/components/LandingPage/mainUser";
import BenefitsPage from "@/components/benefits/benefitsUser";
import Packages from "@/components/packages/PackagesUser";
import Footer from "@/components/FooterUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <MainPage />
      <BenefitsPage />
      <Packages />
      <Footer />
    </main>
  );
}
