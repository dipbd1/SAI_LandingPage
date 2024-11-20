"use client"
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import Image from 'next/image';

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // Delay between each child animation
        },
    },
};

const childVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};

export function WideCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return (
        <section
            className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
        >
            <div
                className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5"
            >
                {/*<div*/}
                {/*    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"*/}
                {/*>*/}
                {/*    <h2*/}
                {/*        className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2"*/}
                {/*    >*/}
                {/*        Experience all the benefits of AI*/}
                {/*    </h2>*/}
                {/*</div>*/}
                <div
                    className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full
                            tw-p-4 max-lg:tw-place-content-center tw-gap-8 "
                >

                    {/*<div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8*/}
                    {/*            tw-place-content-center tw-auto-rows-auto">*/}
                    {/*    <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">*/}
                    {/*        <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex*/}
                    {/*            tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl*/}
                    {/*            hover:tw-scale-[1.02]">*/}
                    {/*            <div className="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">*/}
                    {/*                <img src="./assets/images/home/api.png"*/}
                    {/*                     className="tw-w-full tw-object-contain tw-h-auto"*/}
                    {/*                     alt="unified interface"/>*/}
                    {/*            </div>*/}
                    {/*            <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Unified interface</h2>*/}
                    {/*            <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">*/}
                    {/*                Our's is the only unified AI Interface tool brings together all your favorite chat*/}
                    {/*                models into one seamless platform. No more juggling between different AI*/}
                    {/*                systems—easily manage and interact with multiple chatbots from a single interface.*/}
                    {/*            </p>*/}
                    {/*            <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">*/}
                    {/*                <span>Learn more</span>*/}
                    {/*                <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}


                    {/*    <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">*/}
                    {/*        <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex*/}
                    {/*            tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl*/}
                    {/*            hover:tw-scale-[1.02]">*/}
                    {/*            <div className="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">*/}
                    {/*                <img src="./assets/images/home/api.png"*/}
                    {/*                     alt="API" className="tw-w-full tw-h-auto tw-object-contain"/>*/}
                    {/*            </div>*/}
                    {/*            <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">API Access</h2>*/}
                    {/*            <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">*/}
                    {/*                Pixa's LLM API offers advanced summarization, text generation, and*/}
                    {/*                question-answering. Easily integrate with support for JSON, HTML, Markdown, and*/}
                    {/*                plain text, enhancing your applications with powerful language tools.*/}
                    {/*            </p>*/}
                    {/*            <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">*/}
                    {/*                <span>Learn more</span>*/}
                    {/*                <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}


                    {/*    <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">*/}
                    {/*        <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex*/}
                    {/*            tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl*/}
                    {/*            hover:tw-scale-[1.02]">*/}
                    {/*            <div*/}
                    {/*                className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">*/}
                    {/*                <img src="./assets/images/home/integrations1.png"*/}
                    {/*                     className="tw-w-full tw-h-auto tw-object-contain"*/}
                    {/*                     alt="Prebuilt integrations"/>*/}
                    {/*            </div>*/}
                    {/*            <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Pre-built Tools</h2>*/}
                    {/*            <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">*/}
                    {/*                Pixa offers pre-built AI integrations for diverse creative tasks including image,*/}
                    {/*                video, music, and PDF generation, simplifying advanced feature integration into your*/}
                    {/*                apps.*/}
                    {/*            </p>*/}
                    {/*            <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">*/}
                    {/*                <span>Learn more</span>*/}
                    {/*                <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>*/}
                    {/*            </div>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="reveal-up tw-w-full md:tw-h-[350px] max-md:tw-min-h-[350px] tw-flex">
                        <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex
                            max-md:tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl
                            hover:tw-scale-[1.02]">
                            <div
                                className="tw-text-6xl tw-overflow-hidden tw-rounded-xl tw-w-full tw-h-full max-md:tw-h-[180px]">
                                <Image
                                    src="/images/home/ai-models.png"
                                    alt="AI models"
                                    width={500}
                                    height={300}
                                    className="tw-w-full tw-object-contain tw-h-full"
                                />
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                ref={ref}
                                animate={isInView ? "visible" : "hidden"}
                                className="tw-flex tw-flex-col tw-justify-center tw-gap-4">
                                <motion.h2
                                    variants={childVariants}
                                    className="tw-text-2xl max-md:tw-text-2xl tw-font-medium">Ready to See AllMark in Action? Put Our Detection to the Test!</motion.h2>
                                <motion.p
                                    variants={childVariants}
                                    className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    We’re here to listen, collaborate, and drive your vision forward. Whether it’s
                                    through an email, a phone call, or a visit to our office, initiating a conversation
                                    is the first step towards unparalleled creative success.
                                </motion.p>
                                <motion.div
                                    variants={childVariants}
                                    className="tw-flex tw-flex-row tw-justify-between tw-mt-4">
                                    <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                        <span>Learn more</span>
                                        <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                    </div>
                                    <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                        <span>Checkout Our Products</span>
                                        <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                    </div>
                                    {/*<a*/}
                                    {/*    className="btn tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"*/}
                                    {/*    href="#"*/}
                                    {/*>*/}
                                    {/*    <span>Click Here</span>*/}
                                    {/*    /!*<i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>*!/*/}
                                    {/*</a>*/}
                                </motion.div>

                            </motion.div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}