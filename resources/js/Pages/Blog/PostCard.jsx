import { Link } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card";
import React from "react";
import { Calendar } from "lucide-react";

export default function PostCard({ post }) {
    return (
        <Link
            href={route("blog.post", { slug: post?.slug })}
            className="group w-full"
        >
            <Card
                key={post?.id}
                className="overflow-hidden shadow-lg rounded-xl"
            >
                <img
                    src={post?.image?.full_path || "/images/no-image.png"}
                    alt={post.title}
                    className="h-48 w-full object-cover object-center"
                />

                <CardContent className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post?.created_at}
                    </div>
                    <h2 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-2 group-hover:underline">
                        {post?.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2 mb-3 line-clamp-3">
                        {post?.short_description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}
