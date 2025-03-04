import { Button } from "@/shadcn/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
import SectionWrapper from "./SectionWrapper";

// const MissionVission = () => {
//     return (
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
//             <div className="relative">
//                 <img src="/images/about.png" alt="" />
//             </div>
//             <div className="space-y-4">
//                 <div className="flex flex-col gap-4">
//                     <div className="p-6 rounded-xl shadow-md bg-blue-100">
//                         <h3 className="text-xl font-semibold">
//                             Dedication to Compassionate Care for Every Patient
//                         </h3>
//                         <p className="text-gray-600 mt-2">
//                             Our ad campaign strategies are designed to maximize
//                             your brand’s reach and impact, ensuring effective
//                             engagement and measurable results.
//                         </p>
//                         <button className="mt-4 text-blue-600 flex items-center gap-1">
//                             Read More →
//                         </button>
//                     </div>

//                     <div className="p-6 rounded-xl shadow-md bg-gray-100">
//                         <h3 className="text-xl font-semibold">
//                             Content Strategy
//                         </h3>
//                         <p className="text-gray-600 mt-2">
//                             Our content strategy focuses on creating engaging,
//                             relevant material that drives audience interaction
//                             and supports your business goals.
//                         </p>
//                         <button className="mt-4 text-blue-600 flex items-center gap-1">
//                             Read More →
//                         </button>
//                     </div>

//                     <div className="p-6 rounded-xl shadow-md bg-gray-100">
//                         <h3 className="text-xl font-semibold">
//                             Business Scaling
//                         </h3>
//                         <p className="text-gray-600 mt-2">
//                             Our expert strategies in business scaling help you
//                             expand your operations efficiently, ensuring
//                             sustainable growth and increased market presence.
//                             Partner with us to elevate your business to new
//                             heights.
//                         </p>
//                         <button className="mt-4 text-blue-600 flex items-center gap-1">
//                             Read More →
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
const StatsSection = () => {
    return (
        <>
            <div className="xl:flex justify-center items-center bg-white shadow-md rounded-lg p-6 xl:space-x-8 border border-gray-200">
                <StatItem value="820" label="Mentees" />
                <Divider />
                <StatItem value="350" label="Mentors" />
                <Divider />
                <StatItem value="120" label="User Reviews" />
            </div>{" "}
        </>
    );
};

const StatItem = ({ value, label }) => {
    return (
        <div className="text-center">
            <p className="text-xl font-semibold text-blue-600">
                <CountUp enableScrollSpy={true} end={value} />+
            </p>
            <p className="text-gray-500">{label}</p>
        </div>
    );
};

const Divider = () => (
    <div className="w-10 mx-auto h-px my-2 xl:h-10 xl:w-px bg-gray-300" />
);

const Intro = ({ pageProp }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 items-center space-y-3">
        <div className="relative">
            <img src="/images/about.jpg" alt="" className="rounded-xl" />
            {/* <div className="absolute top-0 right-0 ">
                <div className="relative">
                    <img
                        className="animate-spin duration-[2s]"
                        style={{ animationDuration: "10s" }}
                        src="/images/about_mini_animation.svg"
                        alt=""
                    />
                    <img
                        src="/images/tick.svg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        alt=""
                    />
                </div>
            </div> */}
        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <p>FomoEdge</p>
                <SectionWrapper.Heading level="h2" className={`text-start`}>
                    Connect Learn Succeed — The Mentors You Need for Every
                    Professional Journey
                </SectionWrapper.Heading>
            </div>

            <p>
                Access a network of skilled mentors who will guide you through
                challenges, help set meaningful goals, and unlock new
                opportunities to elevate your career to new heights.
                <Link
                    className="text-blue-600 ml-2 underline underline-offset-2"
                    href={route("aboutUs")}
                >
                    Read more..
                </Link>
            </p>

            <StatsSection />

            <div className="flex justify-end gap-x-4">
                {!pageProp?.auth?.user && (
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                    >
                        <Link href={route("mentors.register.create")}>
                            Be a Mentor
                        </Link>
                    </Button>
                )}
                {/* <Button
                    asChild
                    className="bg-gradient-to-l hover:bg-gradient-to-r from-slate-900 to-slate-700 text-white"
                    size="lg"
                >
                    <Link href="#mentors">
                        Browse Mentors{" "}
                        <ArrowRight className="ml-2 animate-pulse" />
                    </Link>
                </Button> */}
            </div>
        </div>
    </div>
);

export default function AboutIntro({ pageProp }) {
    return (
        <SectionWrapper.Boxed>
            <Intro pageProp={pageProp} />
        </SectionWrapper.Boxed>
    );
}
