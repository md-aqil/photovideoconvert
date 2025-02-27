import AuthenticatedLayout from "@/Layouts/admin/AuthenticatedLayout";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
import React from "react";
import PageHeading from "@/Components/PageHeading";
import ShadcnCard from "@/Components/ShadcnCard";
import { Button } from "@/shadcn/ui/button";
import { Link } from "@inertiajs/react";
import { TextLarge, TextMuted } from "@/shadcn/ui/text-muted";
import { formatDate } from "date-fns";
import {
    BadgeIndianRupee,
    IndianRupee,
    ReceiptIndianRupee,
    Timer,
    User2,
} from "lucide-react";
import User from "../Users/User";
import { Badge } from "@/shadcn/ui/badge";
import { Card, CardHeader, CardTitle } from "@/shadcn/ui/card";

export default function Course({ course }) {
    return (
        <AuthenticatedLayout>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-1 p-4 md:p-8 pt-1">
                    <PageHeading className="py-4">
                        <div className="">
                            <PageHeading.Title>
                                {course?.title}
                            </PageHeading.Title>
                            <p className="text-sm pt-1">
                                You can only view the course details.
                            </p>
                        </div>
                        <PageHeading.Actions>
                            <Button asChild variant="outline">
                                <Link href={route("admin.courses.index")}>
                                    Cancel
                                </Link>
                            </Button>
                        </PageHeading.Actions>
                    </PageHeading>
                    <div className="grid sm:grid-cols-12 gap-x-4">
                        <div className="grid gap-4 sm:col-span-8">
                            <div className="w-full mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div className="flex justify-between bg-muted p-3 rounded-lg">
                                    <div>
                                        <TextLarge>
                                            {course?.title}{" "}
                                            <span className="text-gray-500 text-sm">
                                                ({course?.type})
                                            </span>
                                        </TextLarge>
                                        <div className="">
                                            <Link
                                                href={route(
                                                    "admin.mentor-profiles.edit",
                                                    course?.mentor_profile?.id
                                                )}
                                            >
                                                <div className="flex items-center gap-2 pt-1">
                                                    <div>
                                                        <User2 size={16} />
                                                    </div>
                                                    <div className="text-sm text-gray-600 hover:underline">
                                                        {
                                                            course
                                                                ?.mentor_profile
                                                                ?.full_name
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                            {course?.type === "VIDEO_CALL" && (
                                                <div className="flex items-center gap-2 py-2">
                                                    <div>
                                                        <Timer size={16} />
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {course?.value} Minutes
                                                    </div>
                                                </div>
                                            )}
                                            {course?.price !== null && (
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <IndianRupee
                                                            size={16}
                                                        />
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {course?.price?.price}/-
                                                    </div>
                                                </div>
                                            )}

                                            {course?.price?.special_price !==
                                                null && (
                                                <div className="flex items-center gap-2 py-1">
                                                    <div>
                                                        <IndianRupee
                                                            size={16}
                                                        />
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {course?.price &&
                                                            course?.price
                                                                ?.special_price}
                                                        /-
                                                    </div>

                                                    {course?.price
                                                        ?.special_price !==
                                                        null && (
                                                        <div className="text-sm text-gray-800 flex items-center ">
                                                            From{" "}
                                                            {course?.price
                                                                ?.special_price_start_at &&
                                                                formatDate(
                                                                    course
                                                                        ?.price
                                                                        ?.special_price_start_at,
                                                                    "dd MMM, yyyy h:mm a"
                                                                )}{" "}
                                                            To{" "}
                                                            {course?.price
                                                                ?.special_price_end_at &&
                                                                formatDate(
                                                                    course
                                                                        ?.price
                                                                        ?.special_price_end_at,
                                                                    "dd MMM, yyyy h:mm a"
                                                                )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={
                                                course?.featured_image !== null
                                                    ? course?.featured_image
                                                          ?.full_path
                                                    : "/images/unknown.jpg"
                                            }
                                            alt=""
                                            className="w-[200px] h-[150px] object-cover border rounded-lg"
                                        />
                                    </div>
                                </div>
                                {course?.type === "BUNDLE" && (
                                    <div className="pt-2">
                                        <TextMuted className="inline-block">
                                            Bundle Courses
                                        </TextMuted>
                                        <TextLarge>
                                            {course?.bundle_courses?.map(
                                                (bundle, index) => (
                                                    <Link
                                                        href={
                                                            (`admin.courses.view`,
                                                            bundle?.id)
                                                        }
                                                    >
                                                        <Badge
                                                            key={index}
                                                            variant="default"
                                                            className="mr-1 mb-1 hover:underline"
                                                        >
                                                            {bundle?.title}
                                                        </Badge>
                                                    </Link>
                                                )
                                            )}
                                        </TextLarge>
                                    </div>
                                )}
                                <div className="pt-2">
                                    <div>
                                        <TextMuted className="inline-block">
                                            Topics
                                        </TextMuted>
                                        <TextLarge>
                                            {course?.topics?.map(
                                                (topic, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="default"
                                                        className="mr-1 mb-1"
                                                    >
                                                        {topic?.title}
                                                    </Badge>
                                                )
                                            )}
                                        </TextLarge>
                                    </div>
                                    <div className="py-1">
                                        <TextMuted className="inline-block">
                                            Tags
                                        </TextMuted>
                                        <TextLarge>
                                            {course?.tags?.map(
                                                (topic, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="default"
                                                        className="mr-1 mb-1"
                                                    >
                                                        {topic?.title}
                                                    </Badge>
                                                )
                                            )}
                                        </TextLarge>
                                    </div>
                                </div>
                                <div>
                                    {course?.description?.length > 0 && (
                                        <div className="pt-3">
                                            <TextMuted className="inline-block pb-1">
                                                Course Description
                                            </TextMuted>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: course?.description,
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            {course?.timings?.length > 0 ? (
                                <Card>
                                    <div className="text-xl font-semibold p-6">
                                        Course Slots
                                    </div>
                                    {course?.timings?.map((timing, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center px-3 py-3"
                                        >
                                            <div>
                                                {formatDate(
                                                    timing?.start_date,
                                                    "dd MMM, yyyy"
                                                )}
                                            </div>
                                            <div className="flex gap-4 text-sm items-center">
                                                <div className="bg-gray-300 rounded-lg p-1">
                                                    {timing?.start_time}{" "}
                                                </div>{" "}
                                                To
                                                <div className="bg-gray-300 rounded-lg p-1">
                                                    {" "}
                                                    {timing?.end_time}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Card>
                            ) : (
                                <div className="text-sm text-red-500 text-center p-4 bg-muted mt-2 rounded-lg">
                                    No Slots Available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </AuthenticatedLayout>
    );
}
