import {Hero} from "@/components/hero";
import {Newsletter} from "@/components/Newsletter";
import { Hero2 } from "@/components/hero2";
import { RememberThis } from "@/components/remember_this";
import { MainCards } from "@/components/main_cards";
import { BigCard } from "@/components/BigCard";
import { Quote } from "@/components/quote";

export default function Home() {
    return (
        <div>
            <Hero/>
            {/*<BrandCarousel/>*/}
            {/*<UploadFiles/>*/}
            <RememberThis/>
            <Hero2/>
            {/*<MainCard/>*/}
            <MainCards/>
            {/*<WideCard/>*/}
            <BigCard/>
            <Quote/>
            <Newsletter/>
        </div>
    );
}
