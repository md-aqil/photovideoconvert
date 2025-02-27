import { Link } from "@inertiajs/react";
import { ChevronRight, CircleCheckBig, CircleDot, Home } from "lucide-react";
import React from "react";
import BlankLayout from "@/Layouts/blank-layout";
import Header from "@/Layouts/Header";
import SocialShare from "@/Components/SocialShare";
import { Button } from "@/shadcn/ui/button";
// import CustomDialog from "@/Components/CustomDialog";
import Register from "./Auth/Register";
import PageBanner from "@/Components/PageBanner";
import About from "./About";

const AboutUs = ({ page }) => {
    return (
        <div>
            <Header />
            <div>
                <PageBanner
                    title={"About Us"}
                    // breadcrumbs={<GenerateBreadcrumbs />}
                />
                <section className="w-full mx-auto pt-12 sm:pt-20 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    {/* <div className="text-2xl sm:text-5xl font-bold pb-4 max-w-7xl mx-auto ">
                        Why Choose Us
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:py-52 relative">
                            <div className="hidden sm:block py-28 bg-fomoPrimary-0"></div>
                            <img
                                className="w-[607px] h-[300px] sm:h-[595px] object-cover sm:absolute right-6 top-6 bottom-6 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4"
                                src={"/images/aboutBanner.jpeg"}
                                alt="course"
                            />
                        </div>
                        <div className="max-w-xl sm:py-4">
                            <h3 className="text-lg sm:text-2xl font-semibold pb-2">
                                Fomoedge
                            </h3>
                            <p className="text-gray-500 sm:text-md ">
                                In today’s fast-paced world, the pursuit of
                                knowledge and personal growth is essential for
                                success. As education evolves and career paths
                                become increasingly complex, the need for
                                reliable guidance has never been greater. At
                                Fomoedge, we believe everyone deserves access to
                                genuine, one-on-one mentorship to navigate their
                                personal and professional journeys.
                            </p>
                            <p className="text-gray-500 sm:text-md pt-4">
                                Fomoedge was born to bridge the gap between
                                those seeking direction and those with the
                                experience to provide it. Founded by alumni of
                                the Indian School of Business, Hyderabad, who
                                have individually dedicated themselves to
                                enriching lives and helping others, created a
                                platform where individuals can connect with
                                trusted mentors who bring real-world insights,
                                actionable advice, and a proven track record to
                                help you move forward with confidence.
                            </p>

                            <div className="pt-3 sm:pt-10">
                                <Button
                                    asChild
                                    className="px-16 py-6 bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                                    onClick={(e) => setOpen(true)}
                                >
                                    <Link
                                        href={route("mentors.register.create")}
                                    >
                                        Be a Mentor
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <h3 className="text-lg sm:text-xl font-semibold pt-5 pb-3">
                        Why a Mentorship Platform?
                    </h3>
                    <p className="text-gray-500 py-2 sm:py-0 text-md sm:text-md">
                        The digital world is overflowing with voices claiming
                        expertise in every field. While many provide value, the
                        overwhelming noise often makes it difficult to separate
                        genuine advice from surface-level information. This
                        challenge led to the creation of Fomoedge—a platform
                        where:
                    </p>
                    <div className="py-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700 pb-1 w">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Connect with mentors who have walked the path before
                            you.
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Real experience meets personalized guidance to help
                            you make informed decisions.
                        </div>
                    </div>
                    <div className="py-4">
                        <p className="text-gray-500 pb-3 text-md sm:text-md">
                            Finding the right mentor means you don’t have to
                            “reinvent the wheel.” Mentorship accelerates your
                            progress by letting you learn from someone else’s
                            journey. While education gives you knowledge,
                            mentorship provides personalized insights and
                            tailored advice that no course or article can
                            deliver. At Fomoedge, we know that the right mentor
                            can:
                        </p>
                        <div className="flex gap-2 items-center text-sm text-yellow-600 pb-3 sm:pb-3">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Help identify your strengths, gaps, and areas
                                for improvement.
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-sm text-yellow-600 pb-3 sm:pb-3">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Unlock opportunities and possibilities you may
                                not have considered.
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-sm text-yellow-600">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Motivate you to challenge your limits and
                                achieve your potential.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <h3 className="text-lg sm:text-xl font-semibold pt-5 pb-3">
                        What We Offer
                    </h3>
                    <p className="text-gray-500 py-2 sm:py-0 text-md sm:text-md">
                        Our mission is to empower individuals through impactful,
                        one-on-one mentorship. By providing access to trusted
                        experts, we aim to help you make better decisions,
                        unlock new opportunities, and grow with clarity and
                        confidence. In a world filled with conflicting advice,
                        Fomoedge ensures that knowledge comes from reliable
                        sources—giving you the focused, distraction-free
                        guidance you need to succeed.
                    </p>

                    <h3 className="text-lg sm:text-xl font-semibold pt-5 pb-3">
                        Why Choose Fomoedge?
                    </h3>
                    <div className="">
                        <div className="flex gap-2 items-center text-sm text-yellow-600 pb-3 sm:pb-3">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Personalized Sessions: Tailored advice based on
                                your unique goals.
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-sm text-yellow-600 pb-3 sm:pb-3">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Trusted Experts: Vetted mentors with proven
                                experience and insights.
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-sm text-yellow-600">
                            <CircleCheckBig className="h-4 w-4" />{" "}
                            <div>
                                Zero Spam, Zero Sales: A distraction-free,
                                knowledge-driven platform.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <h3 className="text-lg sm:text-xl font-semibold pt-5 pb-3">
                        How It Works
                    </h3>
                    <div className="py-2">
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1 w">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Find Your Mentor: Search mentors by skills,
                            industry, or career phase.
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Book a Session: Choose a time that fits your
                            schedule.
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Get Real Guidance: Receive actionable advice and
                            insights to move forward confidently
                        </div>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto pb-14 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <h3 className="text-lg sm:text-xl font-semibold pt-5 pb-3">
                        Who We Serve
                    </h3>
                    <div className="py-2">
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1 w">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Students/ individuals seeking clarity on exams,
                            career paths, switches, career growth, better
                            opportunities, international mobility.
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Professionals looking for growth, transitions, or
                            breakthroughs.
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            Entrepreneurs in need of guidance to build and scale
                            their ventures and everything related to
                            entrepreneurship
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700 pb-1">
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>{" "}
                            For all explorers navigating big decisions, seeking
                            new opportunities, as they venture down uncharted
                            paths and explore fresh possibilities
                        </div>
                    </div>
                </section>
                <section>
                    <About />
                </section>
            </div>
        </div>
    );
};

AboutUs.layout = (page) => (
    <BlankLayout
        children={page}
        title={
            page?.props?.page?.meta_title
                ? page?.props?.page?.meta_title
                : page?.props?.page?.title
        }
        metaDescription={page?.props?.page?.meta_description}
    />
);

export default AboutUs;
