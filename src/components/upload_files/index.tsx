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

export function UploadFiles() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-48">
            <motion.h1
                variants={childVariants}
                className="tw-text-4xl tw-font-bold tw-mb-4">Upload File for Analysis</motion.h1>
            <motion.button
                variants={childVariants}
                className="btn tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded">
                Upload File
            </motion.button>
        </motion.div>
    );
}