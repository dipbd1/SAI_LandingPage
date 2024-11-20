import Image from 'next/image'

export function Footer() {
    return (
        <footer className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-8 tw-text-sm tw-pt-12 tw-pb-10 tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-text-black dark:tw-text-white tw-items-center">
            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 tw-w-full tw-justify-between tw-max-w-[1120px]">
                <div className="tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-gap-6 tw-w-full lg:tw-w-auto">
                    <a href="#" className="tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-gap-4">
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={96}
                            height={96}
                            className="tw-max-w-[96px] dark:tw-invert"
                        />
                        <div className="tw-text-center lg:tw-text-left tw-text-2xl lg:tw-text-3xl tw-font-bold">
                            SIMPLE AI
                        </div>
                    </a>
                    <div className="tw-flex tw-gap-4 tw-text-lg">
                        <a
                            href="https://github.com/PaulleDemon/"
                            aria-label="Github"
                            className="hover:tw-text-gray-600 dark:hover:tw-text-gray-300 tw-transition-colors"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/pauls_freeman"
                            aria-label="Twitter"
                            className="hover:tw-text-gray-600 dark:hover:tw-text-gray-300 tw-transition-colors"
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            aria-label="Linkedin"
                            className="hover:tw-text-gray-600 dark:hover:tw-text-gray-300 tw-transition-colors"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-w-full lg:tw-w-auto">
                    <div className="tw-flex tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl tw-font-semibold">Who We Are</h2>
                        <div className="tw-flex tw-flex-col tw-gap-2">
                            <FooterLink href="#">Our Products</FooterLink>
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl tw-font-semibold">What We Do</h2>
                        <div className="tw-flex tw-flex-col tw-gap-2">
                            <FooterLink href="#">M.I.N.O.N - Digital Worker</FooterLink>
                            <FooterLink href="#">Video Summarizing Tool (Coming Soon)</FooterLink>
                            <FooterLink href="#">AllMark</FooterLink>
                            <FooterLink href="https://twitter.com/pauls_freeman">LinkedIn</FooterLink>
                            <FooterLink href="https://github.com/PaulleDemon">Github</FooterLink>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl tw-font-semibold">Legal</h2>
                        <div className="tw-flex tw-flex-col tw-gap-2">
                            <FooterLink href="#">Terms of service</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">DCMA - Content Takedown</FooterLink>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="tw-border-gray-200 dark:tw-border-gray-700" />

            <div className="tw-flex tw-flex-col tw-gap-2 tw-text-gray-600 dark:tw-text-gray-400 tw-items-center tw-text-xs sm:tw-text-sm">
                <span>Copyright © 2024-2025</span>
                <span className="tw-text-center">All trademarks and copyrights belong to their respective owners.</span>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className="hover:tw-underline tw-text-gray-600 dark:tw-text-gray-300 hover:tw-text-gray-900 dark:hover:tw-text-white tw-transition-colors">
            {children}
        </a>
    )
}