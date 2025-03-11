import PageBanner from "@/Components/PageBanner";
import PageLayout from "@/Layouts/PageLayout";
import { Card, CardContent, CardHeader } from "@/shadcn/ui/card";
import SearchForm from "@/Components/Search";

function Search({ courses, keyword }) {
    return (
        <div>
            <PageBanner title={"Search"} />
            <div className="overflow-y-visible h-auto container space-y-4">
                <SearchForm />
                {courses.data.map((course) => (
                    <Card key={course.id}>
                        <CardHeader>{course.title}</CardHeader>
                        <CardContent>{course.excerpt}</CardContent>
                    </Card>
                ))}
            </div>
        </div>
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
