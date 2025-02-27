import React from "react";
import { Link } from "@inertiajs/react";
import { Home } from "lucide-react";

export default function PageBanner({ title, imgSrc, breadcrumbs }) {
    return (
        <div className="relative h-[240px] sm:h-[350px] bg-gradient-to-r from-fomoLight-0 via-fomoPrimary-0 to-fomoLight-0">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img
                src={"/images/pageBanner.webp"}
                className="w-full h-[240px] sm:h-[350px] object-cover"
                alt="course"
            />
            <div className="absolute inset-0 flex flex-col justify-center text-yellow-50 items-center px-3 sm:px-0">
                <h2 className="text-3xl text-center sm:text-5xl font-bold">
                    {title}
                </h2>
                {/* {breadcrumbs && (
                    <div className="flex justify-center items-center sm:gap-1 pt-6">
                        <Link href={"/"}>
                            <Home className="h-5 w-5" />
                        </Link>
                        {breadcrumbs}
                    </div>
                )} */}
            </div>
        </div>
    );
}
