"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ArrowRight, Moon } from 'lucide-react'
import Image from 'next/image'

const RESPONSIVE_WIDTH = 1024

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [, setIsHeaderCollapsed] = useState(false)
    const [isFeatureOpen, setIsFeatureOpen] = useState(false)

    useEffect(() => {
        setIsHeaderCollapsed(window.innerWidth < RESPONSIVE_WIDTH)

        const handleResize = () => {
            setIsHeaderCollapsed(window.innerWidth < RESPONSIVE_WIDTH)
            if (window.innerWidth >= RESPONSIVE_WIDTH) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const savedTheme = localStorage.getItem("color-mode")
        if (savedTheme) {
            document.documentElement.classList.toggle("tw-dark", savedTheme === "dark")
            updateToggleModeBtn()
        }
    }, [])

    const toggleHeader = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleMode = () => {
        document.documentElement.classList.toggle("tw-dark")
        updateToggleModeBtn()
    }

    const updateToggleModeBtn = () => {
        const toggleIcon = document.querySelector("#toggle-mode-icon")
        if (document.documentElement.classList.contains("tw-dark")) {
            toggleIcon?.classList.remove("bi-sun")
            toggleIcon?.classList.add("bi-moon")
            localStorage.setItem("color-mode", "dark")
        } else {
            toggleIcon?.classList.add("bi-sun")
            toggleIcon?.classList.remove("bi-moon")
            localStorage.setItem("color-mode", "light")
        }
    }

    return (
        <header className="lg:tw-px-4 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[3%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700 lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]">
            <Link href="#" className="tw-flex tw-p-[4px] tw-gap-2 tw-place-items-center">
                <div className="tw-h-[30px] tw-max-w-[100px]">
                    <Image
                        src="/logo/logo.png"
                        alt="logo"
                        width={100}
                        height={30}
                        className="tw-object-contain tw-h-full tw-w-full dark:tw-invert"
                    />
                </div>
                <span className="tw-uppercase tw-text-base tw-font-medium">SIMPLE AI</span>
            </Link>
            {/* Desktop menu */}
            <div className="tw-hidden lg:tw-flex tw-items-center tw-gap-5">
                <nav className="tw-flex tw-gap-5 tw-text-base tw-place-items-center">
                    <Link href="/" className="header-links">Home</Link>
                    <Link href="/who-we-are" className="header-links">Who We Are</Link>
                    <Link href="/minion" className="header-links">M.I.N.I.O.N</Link>
                    <Link href="/all-mark" className="header-links">AllMark</Link>
                    <Link href="/why-choose-simple-ai" className="header-links">Work With Us</Link>
                </nav>
                <button onClick={toggleMode} className="header-links tw-text-gray-600 dark:tw-text-gray-300" title="toggle-theme" id="theme-toggle">
                    <Moon className="tw-w-5 tw-h-5" />
                </button>
                <Link href="#" className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2">
                    <span>Try playground</span>
                    <ArrowRight className="tw-w-5 tw-h-5" />
                </Link>
            </div>
            {/* Mobile menu button */}
            <button
                className="tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden"
                onClick={toggleHeader}
                aria-label="menu"
            >
                {isMenuOpen ? <></> : <span className="bi bi-list"></span>}
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="tw-fixed tw-inset-0 tw-bg-black/30 tw-backdrop-blur-sm tw-z-40 tw-pointer-events-none" onClick={toggleHeader}>
                    <div
                        className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-2 tw-bg-zinc-900/90 tw-shadow-lg tw-flex tw-flex-col tw-pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="tw-flex tw-justify-between tw-items-center tw-p-4 tw-border-b tw-border-zinc-700">
                            <Link href="#" className="tw-flex tw-items-center tw-gap-2">
                                <div className="tw-h-[30px] tw-max-w-[100px]">
                                    <Image
                                        src="/logo/logo.png"
                                        alt="logo"
                                        width={100}
                                        height={100}
                                        className="tw-object-contain tw-h-full tw-w-full tw-invert"
                                    />
                                </div>
                                <span className="tw-uppercase tw-text-base tw-font-medium tw-text-white">Pixa</span>
                            </Link>
                            <button onClick={toggleHeader} className="tw-text-zinc-400 hover:tw-text-zinc-100">
                                <X className="tw-w-6 tw-h-6" />
                            </button>
                        </div>
                        <nav className="tw-flex tw-flex-col tw-gap-6 tw-p-6 tw-overflow-y-auto">
                            <Link href="#" className="tw-text-lg tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>API</Link>
                            <Link href="#" className="tw-text-lg tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Blog</Link>
                            <Link href="#" className="tw-text-lg tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Solutions</Link>
                            <button
                                onClick={() => setIsFeatureOpen(!isFeatureOpen)}
                                className="tw-flex tw-items-center tw-justify-between tw-text-lg tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors"
                            >
                                Features
                                <ChevronDown className={`tw-w-5 tw-h-5 tw-transition-transform ${isFeatureOpen ? 'tw-rotate-180' : ''}`} />
                            </button>
                            {isFeatureOpen && (
                                <div className="tw-ml-4 tw-flex tw-flex-col tw-gap-4">
                                    <Link href="#" className="tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Feature 1</Link>
                                    <Link href="#" className="tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Feature 2</Link>
                                    <Link href="#" className="tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Feature 3</Link>
                                </div>
                            )}
                            <Link href="#pricing" className="tw-text-lg tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors" onClick={toggleHeader}>Pricing</Link>
                        </nav>
                        <div className="tw-mt-auto tw-p-6 tw-border-t tw-border-zinc-700">
                            <button onClick={toggleMode} className="tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors tw-mb-6" title="toggle-theme">
                                <Moon className="tw-w-5 tw-h-5" />
                            </button>
                            <Link href="#" className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-white tw-text-black tw-py-2 tw-px-4 tw-rounded hover:tw-bg-zinc-200 tw-transition-colors" onClick={toggleHeader}>
                                Try playground
                                <ArrowRight className="tw-w-5 tw-h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}