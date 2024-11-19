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

export function Quote({
                          quote = "Each innovation we introduce is designed to set new benchmarks in their respective fields. We are here to build a future where technology enhances every aspect of life, making it more connected, more intuitive, and more empowering. At Simple AI, we aren't just developing technology; we're crafting a legacy of innovation that will resonate for generations to come.",
                          author = "Neerav Sood",
                          title = "Founder, Simple AI"
                      }: {
    quote?: string
    author?: string
    title?: string
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
            <motion.figure
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="tw-max-w-3xl tw-mx-auto tw-px-4 tw-text-center tw-shadow-md tw-rounded-lg tw-p-8">
                <motion.blockquote
                    variants={childVariants}
                    className="tw-relative">
                    <p className="tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-leading-relaxed tw-mb-4">
                        &#34;{quote}&#34;
                    </p>
                </motion.blockquote>
                <motion.figcaption
                    variants={childVariants}
                    className="tw-mt-6">
                    <div className="tw-font-medium">{author}</div>
                    <div className="tw-text-gray-500 tw-text-sm tw-mt-1">{title}</div>
                </motion.figcaption>
            </motion.figure>
        </div>
    )
}