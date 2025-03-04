import React from "react";
import Header from "@/Layouts/Header";
import BlankLayout from "@/Layouts/blank-layout";
import B2BMentorshipForm from "@/Components/B2BMentorshipForm";
import PageBanner from "@/Components/PageBanner";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
const B2BMentorship = ({ page, topics }) => {
    return (
        <div>
            <Header />
            <PageBanner title={page.title} />
            <div className="container">
                <Card>
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
            </div>
        </div>
    );
};

B2BMentorship.layout = (page) => (
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

export default B2BMentorship;
