import {Hero} from "@/components/hero";
import {UploadFiles} from "@/components/upload_files";
import {RememberThis} from "@/components/remember_this";
import {Hero2} from "@/components/hero2";
import {Newsletter} from "@/components/Newsletter";
import {MainCard} from "@/components/main_card";
import {WideCard} from "@/components/wide_card";

export default function Home() {
    return (
        <div>
            <Hero/>
            {/*<BrandCarousel/>*/}
            <UploadFiles/>
            <RememberThis/>
            <Hero2/>
            <MainCard/>
            {/*<MainCards/>*/}
            <WideCard/>
            {/*<BigCard/>*/}
            {/*<Quote/>*/}
            <Newsletter/>
        </div>
    );
}
