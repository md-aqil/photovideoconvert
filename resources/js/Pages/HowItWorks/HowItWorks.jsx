import React from "react";

import PageBanner from "@/Components/PageBanner";
import PageLayout from "@/Layouts/PageLayout";
import SectionWrapper from "@/Components/SectionWrapper";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shadcn/ui/accordion";

const steps = [
    {
        id: "01",
        title: "Sign Up as a Mentor",
        description:
            "Create a mentor profile highlighting your expertise, skills, and availability. This helps mentees find the perfect mentor for their needs.",
        image: "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "MENTOR PROFILE",
    },
    {
        id: "02",
        title: "Connect with Mentees",
        description:
            "Respond to mentee requests and schedule sessions that align with your availability. Engage in meaningful conversations to guide and support your mentees.",
        image: "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1200",
        label: "MENTEE INTERACTIONS",
    },
    {
        id: "03",
        title: "Provide Guidance & Feedback",
        description:
            "Help mentees navigate their learning path by offering insights, resources, and actionable feedback to ensure their success.",
        image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        label: "ONGOING SUPPORT",
    },
];

export const faqs = [
    {
        id: 1,
        question: "How do I sign up as a mentor?",
        shortAnswer:
            "Visit the signup page and select 'Mentor' during registration.",
        fullAnswer:
            "To sign up as a mentor, visit the signup page, fill in your personal details, and select the 'Mentor' option during registration. After that, you'll need to provide information about your skills, experience, and availability to complete your profile.",
    },
    {
        id: 2,
        question: "What is the eligibility criteria for becoming a mentee?",
        shortAnswer:
            "Open to students, professionals, or anyone seeking guidance.",
        fullAnswer:
            "Anyone who is eager to learn, improve their skills, or gain insights into a particular field can become a mentee. While no formal qualifications are required, being proactive and willing to take feedback will enhance your mentoring experience.",
    },
    {
        id: 3,
        question: "Can I switch from a mentee to a mentor?",
        shortAnswer: "Yes, switching roles is possible.",
        fullAnswer:
            "Absolutely! If you have gained enough expertise and feel confident in guiding others, you can apply to become a mentor from your profile settings. The platform may review your experience and achievements before approving the switch.",
    },
    {
        id: 4,
        question: "How are mentors matched with mentees?",
        shortAnswer: "Matches are based on skills, goals, and availability.",
        fullAnswer:
            "Our platform uses an intelligent matching system that considers mentors' skills, mentees' learning goals, and both parties' availability to ensure a meaningful and effective connection.",
    },
    {
        id: 5,
        question: "Is there a fee for mentorship sessions?",
        shortAnswer: "Some mentors may charge a fee.",
        fullAnswer:
            "While many mentors volunteer their time for free, some experienced professionals may charge a fee. The details will be clearly mentioned on the mentor’s profile. Always discuss payment terms before confirming sessions.",
    },
    {
        id: 6,
        question: "How can I schedule a session?",
        shortAnswer: "Use the scheduling tool in your dashboard.",
        fullAnswer:
            "To schedule a session, visit the mentor's profile and use the built-in scheduling tool. Select a suitable time slot, and both you and the mentor will receive confirmation and reminders for the session.",
    },
    // {
    //     id: 7,
    //     question: "What if I need to cancel a scheduled session?",
    //     shortAnswer: "You can cancel or reschedule via your dashboard.",
    //     fullAnswer:
    //         "If you need to cancel or reschedule a session, go to your dashboard, locate the scheduled session, and select the 'Cancel' or 'Reschedule' option. Kindly notify your mentor or mentee in advance to maintain professionalism.",
    // },
    {
        id: 8,
        question: "How do I give feedback on a mentor or mentee?",
        shortAnswer: "Feedback can be submitted after each session.",
        fullAnswer:
            "After completing a session, you’ll be prompted to provide feedback. Constructive feedback helps mentors and mentees improve their communication, skills, and overall experience on the platform.",
    },
];

const HowItWorks = ({ page, topics }) => {
    return (
        <div>
            <PageBanner title={"How It works"} />
            <section className="relative py-48 flex flex-col items-center justify-center text-center text-white">
                <div className="absolute inset-0 w-full h-full overflow-hidden -top-w24">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/how-it-works.mp4"
                        autoPlay
                        muted
                        loop
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>

                <div className="z-10 space-y-2 max-w-5xl mx-auto">
                    <SectionWrapper.Heading level="h1" className={`space-y-2`}>
                        How it works
                    </SectionWrapper.Heading>
                    <SectionWrapper.Subheading
                        level="p"
                        className={`text-slate-300`}
                    >
                        Nullam egestas pellentesque sodales. Ut rhoncus placerat
                        varius. Cras sit amet ante sem. Sed varius pretium nisl,
                        nec commodo metus venenatis vitae. In hac habitasse
                        platea dictumst. Nam vitae interdum massa. Sed dapibus
                        sodales dui sed gravida. Integer nec malesuada orci.
                        Integer ullamcorper arcu non felis convallis hendrerit
                        at sit amet felis.
                    </SectionWrapper.Subheading>
                </div>
            </section>

            <SectionWrapper.Boxed>
                <div className="flex flex-col gap-12 p-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            <div
                                className={`absolute ${index % 2 === 0 ? "left-0" : "right-0"} top-0 h-full border-l-2 border-blue-500 hidden md:block`}
                            />
                            <div className="flex-1 text-center md:text-left px-4">
                                <span
                                    className={`text-sm font-bold uppercase tracking-widest transform -rotate-90 origin-left absolute ${index % 2 === 0 ? "left-[-1rem]" : "right-[-13rem]"} top-1/2`}
                                >
                                    {step.label}
                                </span>
                                {/* <h2 className="text-6xl font-bold mt-2">
                                    
                                </h2> */}
                                <SectionWrapper.Heading
                                    level="h2"
                                    className={`text-6xl font-bold mt-2 text-start`}
                                >
                                    {step.id}
                                </SectionWrapper.Heading>
                                {/* <h3 className="text-2xl font-semibold mt-4">
                                    {step.title}
                                </h3> */}
                                <SectionWrapper.Heading
                                    level="h3"
                                    className={`text-2xl font font-bold mt-2 text-start`}
                                >
                                    {step.title}
                                </SectionWrapper.Heading>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="rounded-2xl bg-gray-100 p-4">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        // className="rounded-lg object-cover w-full clip-path-[polygon(20%_0%,_80%_0%,_100%_50%,_80%_100%,_20%_100%,_0%_50%)]"
                                        className="rounded-lg object-cover w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper.Boxed>
            <SectionWrapper.Boxed className="bg-gray-100">
                <SectionWrapper.Heading level="h2">
                    Frequently Asked Questions
                </SectionWrapper.Heading>
                <FAQComponent />
            </SectionWrapper.Boxed>
        </div>
    );
};

export const FAQComponent = () => {
    return (
        <div className="max-w-3xl mx-auto my-10">
            <Accordion type="single" collapsible>
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-gray-600 font-bold">
                                {faq.shortAnswer}
                            </p>
                            <p className="text-sm text-gray-600">
                                {faq.fullAnswer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
HowItWorks.layout = (page) => (
    <PageLayout
        children={page}
        title={
            page.props.page.meta_title
                ? page.props.page.meta_title
                : page.props.page.title
        }
        metaDescription={page.props.page.meta_description}
    />
);

export default HowItWorks;
