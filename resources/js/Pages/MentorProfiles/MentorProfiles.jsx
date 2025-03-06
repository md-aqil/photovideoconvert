import MentorsWithFilter from "@/Components/MentorsWithFilter";
import PageBanner from "@/Components/PageBanner";
import TopicsTagsTabs from "@/Components/TopicsTagsTabs";
import BlankLayout from "@/Layouts/blank-layout";
import Header from "@/Layouts/Header";
import React from "react";

export default function MentorProfiles({ topics }) {
    return (
        <BlankLayout>
            <Header />
            <PageBanner
                title={"Mentors"}
                // breadcrumbs={<GenerateBreadcrumbs />}
            />
            {/* <TopicsTagsTabs topics={topics} /> */}
            <MentorsWithFilter topics={topics} />
        </BlankLayout>
    );
}
