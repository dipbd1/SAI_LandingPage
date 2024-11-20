import Image from 'next/image';

export default function Minion() {
    return (
        <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-p-4 tw-mt-32 lg:tw-mt-32">
            <Image
                src="/Handshake.jpg"
                alt="Who We Are"
                width={1400}
                height={1400}
                className="tw-mb-4 tw-w-full tw-max-w-[1000px] tw-h-auto"
            />
            <h1 className="tw-text-4xl tw-font-bold lg:tw-text-5xl tw-mt-8 tw-mb-8">Why Choose Simple AI?</h1>
            <div className="tw-text-lg tw-space-y-6 lg:tw-text-md lg:tw-space-y-8 mx-auto tw-max-w-[960px] tw-italic">
                <p>At Simple AI, we pride ourselves on being more than just a cutting-edge AI startup—we are a
                    community. Recognized as the best place to work for both seasoned professionals and fresh graduates,
                    we offer a unique culture that supports growth, innovation, and work-life balance.</p>
                <p className="tw-font-bold">Why Choose Simple AI?</p>
                <p><span className="tw-font-bold">Remote-First Culture: </span>In today’s world, flexibility is not just
                    a
                    benefit; it’s essential. Simple AI is committed to a remote-first approach, allowing you to work
                    from anywhere. Whether you’re at a coffee shop in Paris, or at home in Tokyo, your office is
                    wherever you feel most inspired.</p>
                <p><span className="tw-font-bold">Unlimited PTO: </span>We trust our team to do great work even when
                    there’s a great view involved. At Simple AI, we offer unlimited PTO because we believe that rest,
                    relaxation, and pursuit of personal passions can inspire innovation. Take the time you need to
                    recharge, travel, or spend time with loved ones without ever having to worry about counting days.
                </p>
                <p><span className="tw-font-bold">Flexible Work Hours: </span>We understand that brilliance doesn’t
                    always operate on a 9-to-5 schedule. That’s why we offer flexible working hours to fit your
                    lifestyle and maximize your productivity. Early bird or night owl, Simple AI adapts to your rhythm.
                </p>
                <p><span className="tw-font-bold">A Community of Innovators: </span>At Simple AI, you’ll work alongside
                    some of the brightest minds in the industry—people who are eager to challenge the status quo and
                    rethink what’s possible. Collaboration is in our DNA, not just across projects but across
                    continents.
                </p>
                <p><span className="tw-font-bold">Cutting-Edge Projects: </span>Participate in projects at the forefront
                    of AI technology. From developing empathetic machines that better understand human needs, to
                    creating sustainable AI that safeguards our planet, your work will not just be about building
                    technology but defining the future of it.
                </p>
                <p><span className="tw-font-bold">Growth Opportunities: </span>We are committed to the professional
                    development of our employees. With access to courses, workshops, and conferences, along with regular
                    feedback cycles, you’ll gain invaluable skills and experiences that foster both personal and
                    professional growth.
                </p>
                <p>Join Simple AI, where we not only dream about the future, we build it. Here, you’re not just another
                    employee but a vital member of a dynamic team, dedicated to making a significant impact on the world
                    with AI. Dive into a workplace that celebrates diversity, encourages creativity, and offers endless
                    opportunities to make a real difference.</p>
            </div>
        </div>
    );
}