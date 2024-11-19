"use client";
import { motion, useInView } from "framer-motion";
import {useRef} from "react";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each child animation
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function BrandCarousel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (<motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
    >
        <motion.h2
            variants={childVariants}
            className="reveal-up tw-text-3xl max-md:tw-text-xl">
            Trusted by brands you love
        </motion.h2>

        <motion.div
            variants={childVariants}
            className="reveal-up carousel-container">
            <div
                className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2"
            >
                {/*add the brands using your app*/}
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/google.svg"
                        alt="Google"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/microsoft.svg"
                        alt="Microsoft"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/adobe.svg"
                        alt="Adobe"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/airbnb.svg"
                        alt="Airbnb"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/stripe.svg"
                        alt="Stripe"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
                <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                    <Image
                        src="/images/brand-logos/reddit.svg"
                        alt="Reddit"
                        width={150}
                        height={30}
                        className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                    />
                </div>
            </div>
        </motion.div>
    </motion.section>)
}