import Image from 'next/image';

export default function WhoWeAre() {
    return (
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-p-4 tw-mt-32 lg:tw-mt-16">
            <Image
                src="About-Us.jpeg"
                alt="Who We Are"
                width={800}
                height={800}
                className="tw-mb-4 tw-w-full tw-max-w-[800px] tw-h-auto"
            />
            <h1 className="tw-text-4xl tw-font-bold lg:tw-text-5xl tw-mt-8 tw-mb-8">Who We Are</h1>
            <div className="tw-text-lg tw-space-y-6 lg:tw-text-md lg:tw-space-y-8 mx-auto tw-italic tw-max-w-[960px]">
                <p>At Simple AI, we believe in the power of simplicity to unveil the most sophisticated technological solutions. Founded by a team of visionary tech wizards, including Neerav Sood, a serial entrepreneur and AI aficionado, and Gagandeep Kaur, the simple yet brilliant strategist, we are not your ordinary tech startup. We are the place where quirkiness meets brilliance, and the most complex problems find the simplest, most effective solutions.</p>
                <p>In an age where technology often complicates before it simplifies, we stand out by doing the opposite. Simple AI’s mission is to strip away the unnecessary and focus on what truly matters—creating AI that not only works effectively but also seamlessly integrates into everyday life. Our approach is straightforward yet revolutionary: combine state-of-the-art technology with a touch of whimsy and a lot of intellect.</p>
                <p>From our headquarters in the heart of innovation, we are building a suite of AI-driven products that anticipate needs and streamline tasks. Our flagship product, M.I.N.I.O.N., is just the beginning. This intelligent assistant adapts to user behaviors, making each interaction smarter than the last, all while maintaining a light-hearted and engaging personality that makes every interaction a delight.</p>
                <p>Our commitment to leading edge solutions is matched by our dedication to sustainability and ethical AI. At Simple AI, we’re not just developing technology for today—we’re crafting the tools for a smarter, more intuitive tomorrow.</p>
                <p>Join us on this thrilling journey at the forefront of the AI revolution. At Simple AI, we’re making the future simple, fun, and utterly brilliant.</p>
            </div>
        </div>
    );
}