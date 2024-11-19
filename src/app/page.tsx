import {Hero} from "@/components/hero";
import {BrandCarousel} from "@/components/brand_carousel";
import {MainCard} from "../components/main_card";
import {WideCard} from "@/components/wide_card";
import {Quote} from "@/components/quote";

export default function Home() {
    return (
        <div>
            <Hero/>
            <BrandCarousel/>
            <MainCard/>
            <WideCard/>
            <Quote/>
        </div>
    );
}
