import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./CustomTabs";
import NoDataAlert from "./NoDataAlert";
import SwiperCarousel from "./SwiperCarousel";

import { Button } from "@/shadcn/ui/button";
import { ScrollArea, ScrollBar } from "@/shadcn/ui/scroll-area";
import ProfileImageCard from "./Cards/ProfileImageCard";

export default function TopicsTagsTabs({ topics }) {
    const [tagsList, setTagsList] = React.useState(
        topics && topics[0]?.active_tags ? topics[0]?.active_tags : [],
    );

    const [selectedTag, setSelectedTag] = React.useState(
        tagsList && tagsList ? tagsList[0] : [],
    );

    const [mentorList, mentorListSet] = React.useState(
        selectedTag && selectedTag?.[0]?.slug ? selectedTag?.[0]?.slug : [],
    );

    //This state is for showing all courses by default when user came to this page.
    const [selectedSlug, setSelectedSlug] = React.useState(
        topics && topics?.[0]?.slug ? topics?.[0]?.slug : [],
    );

    const [specialIn, setSpecialIn] = React.useState(
        topics && topics?.[0]?.name ? topics?.[0]?.name : [],
    );

    return (
        <div className="min-h-[400px]">
            <Tabs defaultValue={selectedSlug}>
                <TabsList className="flex justify-start gap-4 items-center">
                    <ScrollArea className="w-full sm:max-w-7xl whitespace-nowrap items-center py-5">
                        {topics?.map((topic) => (
                            <TabsTrigger
                                value={topic?.slug}
                                onClick={() => {
                                    setTagsList(topic?.active_tags);
                                    setSelectedSlug(topic?.slug);
                                    setSelectedTag(topic?.active_tags[0]);
                                    mentorListSet(
                                        topic?.active_tags[0]?.mentors,
                                    );
                                    setSpecialIn(topic?.title);
                                }}
                                key={topic.id}
                            >
                                {topic.title}
                            </TabsTrigger>
                        ))}
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </TabsList>
                <div
                    // id="mentors"
                    className="flex justify-between text-xl sm:text-3xl font-semibold border-b border-fomoPrimary-0"
                />
                <TabsContent
                    value={selectedSlug}
                    className="max-w-7xl mx-auto pt-8"
                >
                    <ScrollArea className="w-full p whitespace-nowrarounded-md">
                        <div className="flex gap-4 h-16">
                            {tagsList?.map((tag) => (
                                <Button
                                    key={tag.id}
                                    onClick={(e) => {
                                        setSelectedTag(tag);
                                        mentorListSet(tag?.mentors);
                                    }}
                                    className={`px-6 py-6 rounded-3xl ${
                                        selectedTag?.slug === tag.slug
                                            ? "bg-fomoPrimary-0 text-black hover:bg-[#ffdc6a] font-semibold"
                                            : "bg-[#fff] shadow-sm border border-gray-100 hover:bg-[#ffdc6a]"
                                    } `}
                                >
                                    {tag.title}
                                </Button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <div className="pt-7">
                        {mentorList?.length > 0 ? (
                            <SwiperCarousel
                                count={8}
                                speed={2000}
                                delay={2000}
                                breakpoints={{ sm: 2, md: 4, xl: 4 }}
                                slides={
                                    mentorList &&
                                    mentorList?.map((li) => (
                                        <React.Fragment>
                                            <ProfileImageCard
                                                mentor={li}
                                                specialIn={specialIn}
                                            />
                                        </React.Fragment>
                                    ))
                                }
                            />
                        ) : (
                            <NoDataAlert title="No mentors found!" />
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
