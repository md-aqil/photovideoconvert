import PageBanner from "@/Components/PageBanner";
import PageLayout from "@/Layouts/PageLayout";
import { Card, CardContent, CardHeader } from "@/shadcn/ui/card";
import SearchForm from "@/Components/Search";
import SectionWrapper from "@/Components/SectionWrapper";

function Search({ courses, keyword }) {
    return (
        <>
            <PageBanner title={"Search"} />
            <SectionWrapper.Boxed>
                <div className="max-w-3xl mb-4">
                    <SearchForm />
                </div>

                {courses.data.map((course) => (
                    <Card key={course.id} className="mb-2">
                        <CardHeader>{course.title}</CardHeader>
                        <CardContent>{course.excerpt}</CardContent>
                    </Card>
                ))}
            </SectionWrapper.Boxed>
        </>
    );
}

Search.layout = (page) => (
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

export default Search;
