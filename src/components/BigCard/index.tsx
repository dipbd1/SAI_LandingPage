"use client"
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.4, // Delay between each child animation
        },
    },
};

const childVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};

export function BigCard(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="tw-relative tw-flex tw-p-2  tw-w-full  tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-mt-16"
        >
            <motion.div
                variants={childVariants}
                className="reveal-up tw-w-full tw-min-h-[450px] max-lg:tw-max-w-full tw-rounded-md lg:tw-py-[5%] tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-place-content-center tw-items-center
                        tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">

                <h3 className="reveal-up tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal tw-mx-4">
                    Ready to See AllMark in Action? Put Our Detection to the Test!
                </h3>

                <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">

                    <a href="#" className="btn  reveal-up !tw-rounded-full !tw-p-4 tw-font-medium">
                        Click Here
                    </a>
                </div>

            </motion.div>
        </motion.section>)
}