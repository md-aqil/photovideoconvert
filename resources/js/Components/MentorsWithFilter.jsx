import React, { useState } from "react";
import NoDataAlert from "./NoDataAlert";
import ProfileImageCard from "./Cards/ProfileImageCard";
import { Checkbox } from "@/shadcn/ui/checkbox";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import SectionWrapper from "./SectionWrapper";

export default function MentorsWithFilter({ topics }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedMentors, setSelectedMentors] = useState([]);

    React.useEffect(() => {
        // Show all mentors by default
        const allMentors = topics.flatMap((topic) =>
            topic.active_tags.flatMap((tag) => tag.mentors || [])
        );
        setSelectedMentors(allMentors);
    }, [topics]);

    const handleTagChange = (tag) => {
        let updatedTags;
        if (selectedTags.includes(tag.slug)) {
            updatedTags = selectedTags.filter((t) => t !== tag.slug);
        } else {
            updatedTags = [...selectedTags, tag.slug];
        }
        setSelectedTags(updatedTags);

        // Update mentors list based on selected tags
        if (updatedTags.length === 0) {
            const allMentors = topics.flatMap((topic) =>
                topic.active_tags.flatMap((t) => t.mentors || [])
            );
            setSelectedMentors(allMentors);
        } else {
            const mentors = topics.flatMap((topic) =>
                topic.active_tags
                    .filter((t) => updatedTags.includes(t.slug))
                    .flatMap((t) => t.mentors || [])
            );
            setSelectedMentors(mentors);
        }
    };

    return (
        <SectionWrapper.FullWidth className="grid grid-cols-12 w-full container">
            {/* Sidebar Filters */}
            <div className="col-span-3 border-r">
                <div className="sticky top-20">
                    <SectionWrapper.Heading
                        level="h3"
                        className={`text-xl font-semibold text-start`}
                    >
                        Filter by
                    </SectionWrapper.Heading>
                    <ScrollArea className="overflow-auto p-3 max-h-[calc(100vh-200px)] ">
                        {topics.map((topic) => (
                            <div key={topic.id} className="mb-4">
                                <h4 className="font-semibold mb-2">
                                    {topic.title}
                                </h4>
                                {topic.active_tags.map((tag) => (
                                    <div
                                        key={tag.id}
                                        className="flex items-center mb-2"
                                    >
                                        <Checkbox
                                            checked={selectedTags.includes(
                                                tag.slug
                                            )}
                                            onCheckedChange={() =>
                                                handleTagChange(tag)
                                            }
                                        />
                                        <span className="ml-2">
                                            {tag.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </ScrollArea>
                </div>
            </div>

            {/* Profile Cards Section */}
            <div className="col-span-9 p-4">
                {selectedMentors.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedMentors.map((mentor) => (
                            <ProfileImageCard key={mentor.id} mentor={mentor} />
                        ))}
                    </div>
                ) : (
                    <NoDataAlert title="No mentors found!" />
                )}
            </div>
        </SectionWrapper.FullWidth>
    );
}
