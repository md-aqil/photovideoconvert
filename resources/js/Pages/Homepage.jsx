import React from "react";
// import MentorCategoryTabs from "@/Components/MentorCategoryTabs";
import Header from "@/Layouts/Header";
import { useRef } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import BlankLayout from "@/Layouts/blank-layout";
import { Button } from "@/shadcn/ui/button";
// import { MoveRight } from "lucide-react";
// import CustomDialog from "@/Components/CustomDialog";
import Register from "./Auth/Register";
import { TypeAnimation } from "react-type-animation";
// import Search from "@/Components/Search";
import MultiCarousel from "@/Components/MultiCarousel";
import TopicsTagsTabs from "@/Components/TopicsTagsTabs";

import AboutIntro from "@/Components/AboutIntro";
import RecentPosts from "@/Components/RecentPosts";
import Hero from "@/Components/Hero";

const topUniversities = [
    {
        id: 1,
        path: "/images/topUniversity/isb.png",
    },
    {
        id: 2,
        path: "/images/topUniversity/iims.png",
    },
    {
        id: 3,
        path: "/images/topUniversity/iit.png",
    },
    {
        id: 4,
        path: "/images/topUniversity/nit.png",
    },
    {
        id: 5,
        path: "/images/topUniversity/xlri.webp",
    },
    {
        id: 6,
        path: "/images/topUniversity/insead.png",
    },
    {
        id: 7,
        path: "/images/topUniversity/kellogg.png",
    },
    {
        id: 8,
        path: "/images/topUniversity/imd.png",
    },
    {
        id: 9,
        path: "/images/topUniversity/cambridge.png",
    },
    {
        id: 10,
        path: "/images/topUniversity/oxford.png",
    },
    {
        id: 11,
        path: "/images/topUniversity/columbia.png",
    },
    {
        id: 12,
        path: "/images/topUniversity/lse.png",
    },
    {
        id: 13,
        path: "/images/topUniversity/hecParis.png",
    },
    {
        id: 14,
        path: "/images/topUniversity/nus.png",
    },
];

const topCompanies = [
    {
        id: 1,
        path: "/images/topCompanies/acenture.png",
    },
    {
        id: 2,
        path: "/images/topCompanies/pwc.png",
    },
    {
        id: 3,
        path: "/images/topCompanies/Airbnb.png",
    },
    {
        id: 4,
        path: "/images/topCompanies/Amazon.webp",
    },
    {
        id: 5,
        path: "/images/topCompanies/BankofAmerica.webp",
    },
    {
        id: 6,
        path: "/images/topCompanies/Barclays.png",
    },
    {
        id: 7,
        path: "/images/topCompanies/BGG.png",
    },
    {
        id: 8,
        path: "/images/topCompanies/Deloitte.png",
    },
    {
        id: 9,
        path: "/images/topCompanies/EY.webp",
    },
    {
        id: 10,
        path: "/images/topCompanies/Flipkart.png",
    },
    {
        id: 11,
        path: "/images/topCompanies/GoldmanSachs.png",
    },
    {
        id: 12,
        path: "/images/topCompanies/Google.webp",
    },
    {
        id: 13,
        path: "/images/topCompanies/J.P. Morgan.png",
    },
    {
        id: 14,
        path: "/images/topCompanies/KPMG.png",
    },
    {
        id: 15,
        path: "/images/topCompanies/McKinsey.webp",
    },
    {
        id: 16,
        path: "/images/topCompanies/Meesho.png",
    },
    {
        id: 17,
        path: "/images/topCompanies/Microsoft.webp",
    },
    {
        id: 18,
        path: "/images/topCompanies/michaelPage.png",
    },
    {
        id: 19,
        path: "/images/topCompanies/Uber.webp",
    },
];

const topCountries = [
    {
        id: 1,
        path: "/images/topCountries/Canada.webp",
        name: "Canada",
    },
    {
        id: 2,
        path: "/images/topCountries/UAE.png",
        name: "UAE",
    },
    {
        id: 3,
        path: "/images/topCountries/USA.webp",
        name: "USA",
    },
    {
        id: 4,
        path: "/images/topCountries/CzechRepublic.webp",
        name: "Czech Republic",
    },
    {
        id: 5,
        path: "/images/topCountries/Germany.webp",
        name: "Germany",
    },
    {
        id: 6,
        path: "/images/topCountries/China.png",
        name: "China",
    },
    {
        id: 7,
        path: "/images/topCountries/Japan.webp",
        name: "Japan",
    },
    {
        id: 8,
        path: "/images/topCountries/Australia.webp",
        name: "Australia",
    },
    {
        id: 9,
        path: "/images/topCountries/France.png",
        name: "France",
    },
    {
        id: 10,
        path: "/images/topCountries/Switzerland.jpeg",
        name: "Switzerland",
    },
    {
        id: 11,
        path: "/images/topCountries/UK.webp",
        name: "United Kingdom",
    },
];

const Homepage = ({ page, topics }) => {
    const nextSectionRef = useRef(null);

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const pageProp = usePage().props;
    const { testimonials, latestPosts = [] } = usePage().props;
    return (
        <div>
            <Header isHomePage={true} />
            <Hero />
            <AboutIntro pageProp={pageProp} />
            {/* <div className="max-w-7xl mx-auto py-10 sm:pt-16 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                <div>
                    <div className="text-xl sm:text-3xl text-left font-semibold ">
                        Connect Learn Succeed — The Mentors You Need for Every
                        Professional Journey
                    </div>
                    <p className="text-gray-800 text-sm sm:text-lg py-2">
                        Access a network of skilled mentors who will guide you
                        through challenges, help set meaningful goals, and
                        unlock new opportunities to elevate your career to new
                        heights.
                    </p>
                </div>
            </div> */}
            <div
                id="mentors"
                className="max-w-7xl mx-auto py-12 sm:py-0 sm:pt-20 sm:pb-20 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4"
            >
                <div className="text-xl sm:text-[34px] text-left font-extrabold sm:font-bold ">
                    All the mentors you need in one place
                </div>
                <div className="pt-8 sm:pt-10">
                    <TopicsTagsTabs topics={topics} isHomePage={true} />
                </div>
            </div>
            <div className="py-8 sm:py-0 sm:pb-0 bg-fomoLight-0 sm:bg-white">
                <div className="sm:py-0">
                    <div className="text-xl sm:text-3xl text-center font-semibold pt-4 max-w-7xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                        Our Mentors Come From
                    </div>
                    <div className="pt-8 sm:pt-8">
                        <div className="text-center font-semibold text-sm sm:text-base">
                            Top Schools / Universities
                        </div>
                        <div className="pt-8 sm:pt-8">
                            <MultiCarousel
                                speed={3000}
                                data={topUniversities}
                            />
                        </div>
                    </div>
                </div>
                <div className="py-6 sm:py-4">
                    <div className="pt-8 sm:pt-8">
                        <div className="text-center font-semibold text-sm sm:text-base">
                            Top Companies / Start-ups
                        </div>
                        <div className="pt-8 sm:pt-8">
                            <MultiCarousel speed={3400} data={topCompanies} />
                        </div>
                    </div>
                </div>
                {/* <div className="py-1 sm:py-4">
                    <div className="pt-6 sm:pt-8">
                        <div className="text-center font-semibold text-sm sm:text-base">
                            Top Countries
                        </div>
                        <div className="pt-8 sm:pt-8">
                            <MultiCarousel speed={2500} data={topCountries} />
                        </div>
                    </div>
                </div> */}
            </div>
            {latestPosts.length > 0 && <RecentPosts blogPost={latestPosts} />}
        </div>
    );
};

Homepage.layout = (page) => (
    <BlankLayout
        children={page}
        title={
            page.props.page.meta_title
                ? page.props.page.meta_title
                : page.props.page.title
        }
        metaDescription={page.props.page.meta_description}
    />
);

export default Homepage;
