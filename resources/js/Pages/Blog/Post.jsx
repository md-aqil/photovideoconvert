import PageLayout from "@/Layouts/PageLayout";
import { Badge } from "@/shadcn/ui/badge";
import { formatDate } from "date-fns";

const Post = ({ post }) => {
    console.log("🚀 ~ Post ~ post:", post);
    return (
        <div className="max-w-7xl mx-auto py-10 sm:pt-16 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4 sm:mt-24">
            <img
                src={post.data.image.full_url}
                alt={post.data.title}
                className="rounded-xl w-full"
            />

            <div className="flex gap-x-2 items-center">
                <time
                    dateTime={post.data.created_at}
                    className="text-sm text-muted-foreground"
                >
                    {formatDate(post.data.created_at, "dd MMMM yyyy")}
                </time>
                {post.data.categories.map((c) => (
                    <Badge>{c.name}</Badge>
                ))}
            </div>

            <h1 className="text-start">{post.data.title}</h1>
            <blockquote className="text-start text-gray-600 pt-2">
                {post.data.short_description}
            </blockquote>

            <div
                className="no-tailwindcss-base"
                dangerouslySetInnerHTML={{ __html: post.data.body }}
            />
        </div>
    );
};

Post.layout = (page) => (
    <PageLayout
        children={page}
        title={
            page.props.post.meta_title
                ? page.props.post.meta_title
                : page.props.post.title
        }
        metaDescription={page.props.post.meta_description}
    />
);

export default Post;
