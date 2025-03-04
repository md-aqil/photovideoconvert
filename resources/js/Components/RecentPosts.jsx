import React from "react";
import PostCard from "@/Pages/Blog/PostCard";
import SectionWrapper from "@/Components/SectionWrapper";
import { Link } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";
import { ArrowRight } from "lucide-react";
export default function RecentPosts({ blogPost }) {
    return (
        <SectionWrapper.Boxed className="bg-slate-50">
            <div className="sm:flex justify-between">
                <SectionWrapper.Heading>Recent Articles</SectionWrapper.Heading>
                <Button asChild className="hidden sm:flex">
                    <Link href={route("blog.index")}>
                        See All <ArrowRight className="ml-2 animate-pulse" />
                    </Link>
                </Button>
            </div>
            <SectionWrapper.Spacer />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg">
                {blogPost.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
            <Button asChild className="ml-auto w-full mt-6 flex md:hidden">
                <Link href={route("blog.index")}>
                    See All <ArrowRight className="ml-2 animate-pulse" />
                </Link>
            </Button>
        </SectionWrapper.Boxed>
    );
}
