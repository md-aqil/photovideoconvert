import React from "react";
import Header from "@/Layouts/Header";
import B2BMentorshipForm from "@/Components/B2BMentorshipForm";
import PageBanner from "@/Components/PageBanner";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import PageLayout from "@/Layouts/PageLayout";
import { formatEnum } from "@/Helpers/GlobalFunctions";
import SectionWrapper from "@/Components/SectionWrapper";
const B2BMentorship = ({ page, topics }) => {
    return (
        <div>
            <Header />
            <PageBanner title={"B2B Mentorship"} />
            <SectionWrapper.Boxed>
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>B2B Mentorship Program</CardTitle>
                        <CardDescription>
                            These details will not be visible on the main
                            homepage; only the admin can see them
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <B2BMentorshipForm />
                    </CardContent>
                </Card>
            </SectionWrapper.Boxed>
        </div>
    );
};

B2BMentorship.layout = (page) => (
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

export default B2BMentorship;
