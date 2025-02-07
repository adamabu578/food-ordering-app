// import Image from "next/image";
import Home from "@/components/Home/Home"
import StoreRecommendations from "@/components/Store/Store";
import CategoriesSection from "@/components/Categories/Categories";
import CareerSection from "@/components/Career-section/CareerSection";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
    <Home/>
    <StoreRecommendations/>
    <CategoriesSection/>
    <CareerSection/>
    <Footer/>
    </div>
  );
}
