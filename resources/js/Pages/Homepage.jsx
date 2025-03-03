import React from "react";
// import MentorCategoryTabs from "@/Components/MentorCategoryTabs";
import Header from "@/Layouts/Header";

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
import Search from "@/Components/Search";
import { Separator } from "@/shadcn/ui/separator";
import AboutIntro from "@/Components/AboutIntro";

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
    const pageProp = usePage().props;
    return (
        <div>
            <Header isHomePage={true} />
            <div className="header-gradient w-full mx-auto relative">
                <div className="sm:grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <div className="mx-auto py-12 sm:pt-40">
                        <div className="text-4xl sm:text-5xl font-bold py-5 w-[320px] sm:w-[615px]">
                            {/* <p className="text-xl mb-4 inline-block">
                                    <span className="font-bold italic">
                                        An ISB Alumni Initiative
                                    </span>
                                </p> */}
                            <div className="text-sm sm:text-lg mb-2 sm:mb-4 font-semibold lg:w-[650px]">
                                Expert insights | Connect with vetted experts |
                                Unlock Your Potential <br></br>
                                <div className="pt-2">
                                    <span className="text-3xl font-semibold text-center">
                                        1-on-1 mentorship
                                    </span>
                                </div>
                            </div>
                            <div className="h-[70px] w-full">
                                <TypeAnimation
                                    sequence={[
                                        "Career Switch ",
                                        1000,
                                        "LinkedIn Optimization",
                                        1000,
                                        "Study Abroad",
                                        1000,
                                        "Growth Strategy",
                                        1000,
                                        "GMAT Exam",
                                        1000,
                                        "CAT Exam 	",
                                        1000,
                                        "GRE Exam	",
                                        1000,
                                        "Product Management",
                                        1000,
                                        "CFA Exam	",
                                        1000,
                                        "Go to Market Strategy",
                                        1000,
                                        "FRM Exam",
                                        1000,
                                        "Start-Up Support	",
                                        1000,
                                        "Exams Coaching	 	",
                                        1000,
                                        "Product Strategy",
                                        1000,
                                        "Overseas Career 	",
                                        1000,
                                        "Airbnb Start-Up Model	",
                                        1000,
                                        "Job Application	",
                                        1000,
                                        "Resume Building",
                                        1000,
                                        "Digital Marketing",
                                        1000,
                                        "Finance Careers",
                                        1000,
                                        "Product Management Careers",
                                        1000,
                                        "Social Media Growth	",
                                        1000,
                                        "Influencer Marketing	",
                                        1000,
                                        "Human Resources Careers",
                                        1000,
                                        "International Scholarships 	",
                                        1000,
                                        "Technology Careers",
                                        1000,
                                        "Data Science Careers",
                                        1000,
                                        "Jobs Abroad",
                                        1000,
                                        "IELTS Exam 	",
                                        1000,
                                        "Analytics Careers",
                                        1000,
                                        "Immigration 	",
                                        1000,
                                        "Global Job Market	",
                                        1000,
                                        "Project Management	",
                                        1000,
                                        "MBA Preparation	",
                                        1000,
                                        "Quantitative Aptitude	",
                                        1000,
                                        "Verbal Reasoning	",
                                        1000,
                                        "Pitch Deck Creation",
                                        1000,
                                        "Foreign Languages 	",
                                        1000,
                                        "Phd & careers",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className="text-[30px] sm:text-[50px] font-bold inline-block"
                                    repeat={Infinity}
                                />
                            </div>
                        </div>
                        {/* This Buttons is for the mobile view */}
                        <div className="flex gap-3 pt-0 sm:hidden">
                            {" "}
                            <Button
                                asChild
                                className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                                size="sm"
                            >
                                <Link href="#mentors">Browse Mentors</Link>
                            </Button>
                            {!pageProp?.auth?.user && (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="bg-transparent border-slate-900 text-slate-900"
                                    // onClick={() => setOpen(true)}
                                >
                                    <Link
                                        href={route("mentors.register.create")}
                                    >
                                        Be a Mentor
                                    </Link>
                                </Button>
                            )}
                        </div>
                        <div className="flex gap-3 pt-8 sm:pt-6">
                            <div className="w-full sm:w-[300px]">
                                <Search />
                            </div>
                            <Separator
                                orientation="vertical"
                                className="bg-fomoPrimary-0 h-100 hidden sm:block"
                            />
                            <div className="hidden sm:block">
                                <Button
                                    asChild
                                    className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                                    size="lg"
                                >
                                    <Link href="#mentors">Browse Mentors</Link>
                                </Button>
                            </div>
                            <div className="hidden sm:flex lg:hidden xl:hidden">
                                {!pageProp?.auth?.user && (
                                    <Button
                                        asChild
                                        className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                                        size="lg"
                                    >
                                        <Link
                                            href={route(
                                                "mentors.register.create",
                                            )}
                                        >
                                            Be a Mentor
                                        </Link>
                                    </Button>
                                )}
                            </div>{" "}
                        </div>
                        <div className="text-xs text-black sm:text-sm mt-8 sm:mt-10 bg-[#fff0c6] shadow-xl p-4 sm:p-5 font-semibold rounded-3xl rounded-tr-none rounded-bl-none">
                            Just Expert Advice Tailored for You—Because You
                            Deserve the Edge to Succeed
                        </div>
                    </div>
                    <div className="hidden sm:hidden lg:block xl:block">
                        <div className="flex justify-end pt-[315px] relative z-10 ">
                            <div className="pt-[67px] ">
                                {!pageProp?.auth?.user && (
                                    <Button
                                        asChild
                                        className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                                        size="lg"
                                    >
                                        <Link
                                            href={route(
                                                "mentors.register.create",
                                            )}
                                        >
                                            Be a Mentor
                                        </Link>
                                    </Button>
                                )}
                            </div>{" "}
                            <img
                                // src="./images/studentBanner3.png"
                                src="./images/heroBanner.svg"
                                className="h-[260px] w-[340px] object-cover"
                                alt=""
                            />
                            <div className="absolute bottom-0 right-0 rotating z-[-1]">
                                <img
                                    src="./images/dotBanner.svg"
                                    className="h-[390px] w-[390px] object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutIntro />

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
