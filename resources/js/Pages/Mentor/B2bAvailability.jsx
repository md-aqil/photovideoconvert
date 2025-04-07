import PageHeading from "@/Components/PageHeading";

import MentorAuthLayout from "@/Layouts/MentorAuthLayout/MentorAuthLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

import B2BMentorshipForm from "@/Components/B2BMentorshipForm";

export default function B2bAvailibility({}) {
    return (
        <MentorAuthLayout>
            <Head>
                <title>Update Profile</title>
            </Head>
            <PageHeading className="mb-5">
                <div className="">
                    <PageHeading.Title>{`user?.full_name`}</PageHeading.Title>
                    <p className="text-sm pt-1">
                        Make changes to your profile here. Click save when
                        you're done.
                    </p>
                </div>
            </PageHeading>
            <div className="grid sm:grid-cols-12 gap-x-4">
                <div className="grid gap-4 sm:col-span-8">
                    <B2BMentorshipForm />
                </div>
            </div>
        </MentorAuthLayout>
    );
}
