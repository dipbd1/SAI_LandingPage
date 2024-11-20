import {Hero} from "@/components/hero";
import {Newsletter} from "@/components/Newsletter";
import {MainCard} from "@/components/main_card";
import {WideCard} from "@/components/wide_card";
import {BrandCarousel} from "@/components/brand_carousel";

export default function Home() {
    return (
        <div>
            <Hero/>
            <BrandCarousel/>
            {/*<UploadFiles/>*/}
            {/*<RememberThis/>*/}
            {/*<Hero2/>*/}
            <MainCard/>
            {/*<MainCards/>*/}
            <WideCard/>
            {/*<BigCard/>*/}
            {/*<Quote/>*/}
            <Newsletter/>
        </div>
    );
}
