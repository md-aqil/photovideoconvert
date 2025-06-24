import React, { useState } from "react";
import { Checkbox } from "@/shadcn/ui/checkbox";
import { ScrollArea } from "@/shadcn/ui/scroll-area";

import {
    Sheet,
    SheetContent,
    // SheetDescription,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/shadcn/ui/sheet";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/shadcn/ui/accordion";
import { Button } from "@/shadcn/ui/button";
import { Label } from "@/shadcn/ui/label";
import { ListFilter } from "lucide-react";
import NoDataAlert from "@/Components/NoDataAlert";
import ProfileImageCard from "@/Components/Cards/ProfileImageCard";
import BlankLayout from "@/Layouts/blank-layout";
import Header from "@/Layouts/Header";
import PageBanner from "@/Components/PageBanner";
import SectionWrapper from "@/Components/SectionWrapper";
import { router } from "@inertiajs/react";

export default function MentorProfilesByTag({ topics, mentors, tag }) {
    const handleTagChange = () => {
        // let updatedTags;
        // if (selectedTags.includes(tag.slug)) {
        //     updatedTags = selectedTags.filter((t) => t !== tag.slug);
        // } else {
        //     updatedTags = [...selectedTags, tag.slug];
        // }
        // setSelectedTags(updatedTags);
    };

    const FilterContent = () => (
        <>
            <SectionWrapper.Heading
                level="h3"
                className="text-xl font-semibold text-start"
            >
                Filter by
            </SectionWrapper.Heading>
            <ScrollArea className="overflow-auto sm:p-3 max-h-[calc(100vh-200px)] bg-yellow-50/10">
                {topics.map((topic) => (
                    <div key={topic.id} className="mb-4">
                        <h4 className="font-semibold mb-2">{topic.title}</h4>
                        <div className="max-h-60 overflow-y-auto">
                            {topic.active_tags.map((t) => (
                                <Label
                                    htmlFor={t.slug}
                                    key={t.id}
                                    // className=""
                                    className={`flex items-center text-[16px] mb-2 cursor-pointer mx-0  ${
                                        t.slug == tag?.slug
                                            ? "text-black"
                                            : "text-slate-500"
                                    }`}
                                >
                                    <Checkbox
                                        id={t.slug}
                                        checked={t.slug == tag?.slug}
                                        onCheckedChange={() =>
                                            tag?.slug == t.slug
                                                ? router.visit(
                                                      route(
                                                          "mentors.all-mentors-by-tag"
                                                      )
                                                  )
                                                : router.visit(
                                                      route(
                                                          "mentors.all-mentors-by-tag",
                                                          {
                                                              tagSlug: t.slug,
                                                          }
                                                      )
                                                  )
                                        }
                                    />
                                    <span className="ml-2">{t.title}</span>
                                </Label>
                            ))}
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </>
    );

    return (
        <BlankLayout
            schema={{
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://fomoedge.com",
                inLanguage: "en",
                name: "Mentors",
                description: "Mentors",
                url: "https://fomoedge.com/mentors",
                image: "https://fomoedge.com/images/logo-transparent.png",
                type: "website",
                locale: "en_US",
            }}
        >
            <Header />
            <PageBanner
                title={`Mentors ${tag ? `with ${tag.title}` : ""}`}
                // breadcrumbs={<GenerateBreadcrumbs />}
            />
            <SectionWrapper.FullWidth className="grid grid-cols-12 w-full container">
                {/* Sidebar Filters for Desktop */}
                <div className="hidden md:block col-span-3 border-r">
                    <div className="sticky top-20">
                        <FilterContent />
                    </div>
                </div>

                {/* Drawer Filters for Mobile */}
                <div className="col-span-12 md:hidden mb-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full gap-x-3"
                            >
                                <ListFilter className="ml-2" /> Filter
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-slate-100">
                            <div className="pb-4">
                                <FilterContent />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Profile Cards Section */}
                <div className="col-span-12 md:col-span-9 p-4">
                    {mentors.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {mentors.map((mentor) => (
                                <ProfileImageCard
                                    key={mentor.id}
                                    mentor={mentor}
                                />
                            ))}
                        </div>
                    ) : (
                        <NoDataAlert title="No mentors found!" />
                    )}
                </div>
            </SectionWrapper.FullWidth>
        </BlankLayout>
    );
}
