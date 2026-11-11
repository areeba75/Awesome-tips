
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HolidayFinder from "@/components/HolidayFinder";
import Destinations from "@/components/Destinations";
import HolidayCategories from "@/components/HolidayCategories";
import WhyAwesomeTrips from "@/components/WhyAwesomeTrips";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HolidayFinder/>
            <Destinations />
            <HolidayCategories/>
            <WhyAwesomeTrips/>
            <EnquirySection/>
            <Footer/>

    </main>
  );
}
