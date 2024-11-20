"use client";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

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

export function MainCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (<section
        className="tw-relative tw-flex  tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-mt-28 lg:tw-mt-80"
    >
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4"
        >
            <div
                className="purple-bg-grad reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"></div>
            <motion.h2
                variants={childVariants}
                className="reveal-up tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase"
            >
                <span className="tw-font-semibold">M.I.N.I.O.N. – AI based Digital Worker</span>
                <br/>
                {/*<span className="tw-font-serif">on top of Pixa APIs</span>*/}
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="reveal-up tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-4"
            >

                <motion.img
                    variants={childVariants}
                    src="Minion.jpeg"
                    alt="Placeholder Image"
                    className="tw-w-full md:tw-w-1/2 tw-object-cover tw-rounded-md"
                />
                <div>
                    <motion.p
                        variants={childVariants}
                        className="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm"
                    >
                        M.I.N.I.O.N., our flagship product, has transformed the way businesses operate, integrating
                        seamlessly
                        into diverse industries to provide a scalable, error-free, and tirelessly efficient digital
                        workforce.
                        Known for its groundbreaking AI capabilities, M.I.N.I.O.N. became a cornerstone of digital
                        transformation, trusted by thousands and celebrated as a true game-changer in the AI space.
                    </motion.p>
                    <motion.p
                        variants={childVariants}
                        className="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm"
                    >
                        Among its many functionalities, M.I.N.I.O.N. featured specialized modules for Human Resources
                        and
                        Outbound Sales that significantly enhanced operational efficiencies in these critical areas. The
                        Human
                        Resources module automated many traditional HR functions, such as candidate screening and
                        initial
                        interviews, leveraging AI to facilitate faster and more effective recruitment processes.
                        Similarly,
                        the
                        Outbound Sales module revolutionized sales strategies by employing sophisticated algorithms to
                        manage
                        leads and customize communication with potential customers, driving sales with unprecedented
                        precision
                        and personalization.
                    </motion.p>
                    <motion.p
                        variants={childVariants}
                        className="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm"
                    >
                        Recently, M.I.N.I.O.N. embarked on a new chapter. Acquired by a leading tech firm in Texas, its
                        legacy
                        of innovation continues to thrive under new stewardship. This transition marks a milestone in
                        our
                        journey—not as a conclusion, but as a beacon of our enduring impact and vision.
                    </motion.p>
                </div>

            </motion.div>

            <motion.div
                variants={childVariants}
                className="reveal-up tw-flex tw-mt-8"
            >
                <a
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300
                        tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md"
                >
                    Check AllMark APIs
                </a>
            </motion.div>
        </motion.div>
    </section>)
}