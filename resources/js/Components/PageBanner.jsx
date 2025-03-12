import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Home } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function PageBanner({ title, imgSrc, breadcrumbs }) {
    const { page } = usePage().props;
    return (
        <div className="relative hero-bg">
            {/* <div className="relative bg-[#ffc93d]"> */}
            <div className="absolute inset-x-0 bottom-0">
                {page.slug !== "how-it-works" && (
                    <svg
                        viewBox="0 0 224 12"
                        fill="currentColor"
                        className="w-full -mb-1 text-white"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                    </svg>
                )}
            </div>
            <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                <SectionWrapper.Heading level="h1" className={`space-y-2`}>
                    {title}
                </SectionWrapper.Heading>
            </div>
        </div>
    );
}
