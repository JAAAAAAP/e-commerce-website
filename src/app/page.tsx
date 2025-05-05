import BrandBar from "@/components/Home/BrandBar";
import BrowseByDressStyle from "@/components/Home/BrowseByDressStyle";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrivalSection";
import TopSelling from "@/components/Home/TopSelling";
import CustomerReviews from "@/components/Home/CustomerReviews";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <>
      <Hero />
      <BrandBar />
      <NewArrival />
      <div className="container mt-16">
        <Separator />
      </div>
      <TopSelling />
      <BrowseByDressStyle />
      <CustomerReviews />
    </>
  );
}
