import PageLayout from "@/Layouts/PageLayout";
import PostCard from "./PostCard";
import React from "react";

const Blog = ({ posts }) => {
    return (
        <div className="max-w-7xl mx-auto py-10 sm:pt-16 px-4 md:px-4 lg:px-4 xl:px-0 sm:px-4 sm:mt-24">
            <h1>Latest Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg">
                {posts.data.map((item, index) => (
                    <React.Fragment key={index}>
                        <PostCard post={item} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

Blog.layout = (page) => (
    <PageLayout children={page} title="Blog" metaDescription="Blog" />
);

export default Blog;
