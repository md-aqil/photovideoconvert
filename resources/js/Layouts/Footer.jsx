import NewsLetterForm from "@/Components/NewsLatterForm";
import React from "react";
import SocialShare from "@/Components/SocialShare";
import { Link } from "@inertiajs/react";
import { Mail, MapPin } from "lucide-react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export const Footer = () => {
    return (
        <>
            <NewsLetterForm />
            <footer className="relative z-10 py-8 sm:py-20">
                <div className="max-w-screen-xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <div className="flex flex-wrap gap-x-6">
                        <div className="w-full sm:w-2/3 lg:w-4/12">
                            <div className="w-full">
                                <div>
                                    <div
                                        // href="/"
                                        className="mb-3 inline-block max-w-[160px]"
                                    >
                                        <ApplicationLogo className="block h-20 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                    </div>
                                </div>
                                <p className="mb-2 text-base text-body-color dark:text-dark-6 inline-flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" /> lucknow,
                                    UP, India
                                </p>
                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link={"/mentors"} label="Mentors" />
                            {/* <NavLink link="#" label="Become an Instructor" /> */}
                            {/* <NavLink link="#" label="FAQs" /> */}
                            {/* <NavLink
                                // link={route("blog.index")}
                                label="Blog"
                            /> */}
                            {/* <NavLink link="" label="My Account" /> */}
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/about-us" label="About Us" />
                            <NavLink link="/contact-us" label="Contact Us" />
                            <p className="flex items-center gap-2 text-sm py-1 font-medium text-dark dark:text-white">
                                {" "}
                                <Mail className="w-5 h-5" />
                                support@fomoedge.com
                            </p>
                        </LinkGroup>

                        <div className="w-full sm:w-1/2 lg:w-3/12">
                            <div className="w-full">
                                <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                                    Follow Us On
                                </h4>
                                <SocialShare />
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex justify-between items-center mt-10 mb-0 text-xs text-gray-500">
                        <div className="mb-2 sm:mb-0">
                            <span>
                                {" "}
                                &copy; {new Date().getFullYear()} FOMOEDGE.COM
                            </span>
                            <span className="mx-2">|</span>
                            <span>All Rights Reserved</span>
                        </div>

                        <div>
                            <span className="hover:text-black transition-all duration-300">
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </span>
                            <span className="mx-2 hover:text-black transition-all duration-300">
                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>
                            </span>
                            <span className="mx-2 hover:text-black transition-all duration-300">
                                <Link href="/refund-policy">Refund Policy</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full sm:w-1/2 lg:w-2/12">
                <div className="w-full mb-3">
                    <h4 className="text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                    <ul className="space-y-0.5">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block leading-loose hover:text-uno text-md"
            >
                {label}
            </a>
        </li>
    );
};
const FooterLinksCloud = ({ heading = "", data = [] }) => {
    return (
        <>
            <h4 className="mt-6 mb-4 text-md font-semibold text-dark dark:text-white">
                {heading}
            </h4>
            <ul className="flex-wrap pl-0 flex gap-x-5">
                {data.map((item, index) => (
                    <li
                        className="text-sm text-neutral-500 hover:underline"
                        key={index}
                    >
                        <Link
                        // href={route("shop.show-product-by-slug", {
                        //     productSlug: item.slug,
                        // })}
                        >
                            {item?.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Footer;
