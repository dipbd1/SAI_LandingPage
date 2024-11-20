"use client";
import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

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

export function RememberThis() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            variants={containerVariants}
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <motion.h1
                variants={childVariants}
                className="tw-text-4xl tw-font-bold tw-mb-4">Remember This?</motion.h1>
            <motion.div
                variants={childVariants}
                className="tw-relative tw-w-full tw-max-w-[560px] tw-h-0 tw-pb-[56.25%]">
                <iframe className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-2/3"
                        src="https://www.youtube.com/embed/oxXpB9pSETo"
                        title="This is not Morgan Freeman  -  A Deepfake Singularity" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </motion.div>
        </motion.div>
    );
}