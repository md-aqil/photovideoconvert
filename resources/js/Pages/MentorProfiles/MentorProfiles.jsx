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
            <div className="">
                <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4">
                    <div>
                        <TopicsTagsTabs topics={topics} />
                    </div>
                    {/* )} */}
                    <div className="flex justify-center mt-6">
                        {/* <PaginationBar
                            // meta={upcoming_events?.meta}
                            paginationLinks={tags?.links}
                        /> */}
                    </div>
                </div>
            </div>
        </BlankLayout>
    );
}
