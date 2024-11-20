import {Hero} from "@/components/hero";
import {Newsletter} from "@/components/Newsletter";
import {MainCard} from "@/components/main_card";
import {WideCard} from "@/components/wide_card";
import {BrandCarousel} from "@/components/brand_carousel";
import { UploadFiles } from "@/components/upload_files";
import { Hero2 } from "@/components/hero2";
import { RememberThis } from "@/components/remember_this";
import { MainCards } from "@/components/main_cards";
import { BigCard } from "@/components/BigCard";
import { Quote } from "@/components/quote";

export default function Home() {
    return (
        <div>
            <Hero/>
            <BrandCarousel/>
            <UploadFiles/>
            <RememberThis/>
            <Hero2/>
            <MainCard/>
            <MainCards/>
            <WideCard/>
            <BigCard/>
            <Quote/>
            <Newsletter/>
        </div>
    );
}
