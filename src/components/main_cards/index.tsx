"use client";
import {motion, useInView} from 'framer-motion';
import {useRef} from "react";
import Image from 'next/image';

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: .4, // Delay between each child animation
        },
    },
};

const revealUpVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};

export function MainCards() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
            <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <motion.h2
                        variants={revealUpVariants}
                        className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2"
                    >
                        Secure Truth in a Digital World
                    </motion.h2>
                </motion.div>
                <div className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full tw-p-4 max-lg:tw-place-content-center tw-gap-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 tw-place-content-center tw-auto-rows-auto"
                    >
                        <motion.div
                            variants={revealUpVariants}
                            className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full"
                        >
                            <a href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                                <div className="tw-relative tw-w-full tw-h-[240px] tw-overflow-hidden">
                                    <Image
                                        src="/images/home/api.png"
                                        alt="unified interface"
                                        fill
                                        className="tw-w-full tw-h-auto"
                                    />
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Unified interface</h2>
                                <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    AllMark is the only unified AI-powered detection tool that seamlessly integrates deepfake detection across video and audio formats.
                                </p>
                                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={revealUpVariants}
                            className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full"
                        >
                            <a href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                                <div className="tw-relative tw-w-full tw-h-[240px] tw-overflow-hidden">
                                    <Image
                                        src="/images/home/api.png"
                                        alt="API Access"
                                        fill
                                        className="tw-w-full tw-h-auto"
                                    />
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">API Access</h2>
                                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    AllMark&#39;s advanced AI API offers powerful deepfake detection across video and audio, providing robust verification and security.
                                </p>
                                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={revealUpVariants}
                            className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full"
                        >
                            <a href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                                <div className="tw-relative tw-w-full tw-h-[240px] tw-overflow-hidden">
                                    <Image
                                        src="/images/home/integrations1.png"
                                        alt="Prebuilt integrations"
                                        fill
                                        className="tw-w-full tw-h-auto"
                                    />
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Pre-built Tools</h2>
                                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    AllMark offers enterprise-grade AI integrations for comprehensive deepfake detection across various content formats.
                                </p>
                                <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}