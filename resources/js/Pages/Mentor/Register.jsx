import { useEffect } from "react";
import React from "react";
import { Input } from "@/shadcn/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import CountrySelect from "@/Components/CountrySelect";
import { CircleX } from "lucide-react";
import "react-phone-input-2/lib/style.css";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import LoadingButton from "@/Components/LoadingButton";

export default function Register() {
    const { globalSettings } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        phone_country_id: "",
        password: "",
        social_links: [],
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("mentors.register.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Mentor Register" />
            <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative items-center hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-[#ffc93b]" />
                    <div className="relative z-20 flex items-center text-lg font-medium text-white dark:text-white">
                        {/* <ApplicationLogo className="w-44s text-white" /> */}
                        <div className="flex justify-center items-center pt-48">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold md:text-base"
                            >
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={globalSettings?.general?.app_logo}
                                    alt={
                                        globalSettings?.general?.app_logo ||
                                        appName
                                    }
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex px-4 justify-center py-4 lg:px-4 sm:px-4 relative">
                    <Card className="w-full max-w-xl">
                        <CardHeader>
                            <CardTitle>Become a Mentor</CardTitle>
                            <CardDescription>
                                Please fill the form to register as a mentor.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={submit}
                                className="max-w-xl mx-auto relative"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="mt-2">
                                        <InputLabel
                                            htmlFor="first_name"
                                            value="First Name"
                                        />
                                        <Input
                                            id="first_name"
                                            name="first_name"
                                            placeholder="First name"
                                            value={data.first_name}
                                            className="mt-1 block w-full bg-slate-100 p-2"
                                            autoComplete="first_name"
                                            onChange={(e) =>
                                                setData(
                                                    "first_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.first_name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <InputLabel
                                            htmlFor="last_name"
                                            value="Last Name"
                                        />

                                        <Input
                                            id="last_name"
                                            name="last_name"
                                            value={data.last_name}
                                            placeholder="Last name"
                                            className="mt-1 block w-full bg-slate-100 p-2"
                                            autoComplete="last_name"
                                            onChange={(e) =>
                                                setData(
                                                    "last_name",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.last_name}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1 mt-2">
                                    <InputLabel
                                        htmlFor="alias_name"
                                        value="Alias Name"
                                    />

                                    <Input
                                        id="alias_name"
                                        name="alias_name"
                                        placeholder="Publicly visible name"
                                        value={data.alias_name}
                                        className="mt-1 block w-full bg-slate-100 p-2"
                                        autoComplete="alias_name"
                                        onChange={(e) =>
                                            setData(
                                                "alias_name",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.alias_name}
                                        className="mt-2"
                                    />
                                </div>

                                {/* <div className="mt-2">
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Phone Number"
                                    />

                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        className="mt-2"
                                        value={data?.phone}
                                        onChange={(e) => setData("phone", e)}
                                    />
                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div> */}
                                <div className="mt-2">
                                    <CountrySelect
                                        data={data}
                                        onSelectChange={(e) =>
                                            setData("phone_country_id", e)
                                        }
                                        onInputChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-2">
                                    <InputLabel
                                        htmlFor="linkedin"
                                        value="LinkedIn"
                                    />

                                    <Input
                                        id="linkedin"
                                        type="url"
                                        name="linkedin"
                                        placeholder="Enter linkedin url"
                                        value={data?.social_links[0]?.url}
                                        className="mt-1 block w-full bg-slate-100 p-2"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("social_links", [
                                                {
                                                    url: e.target.value,
                                                    label: "Linkedin",
                                                    status: 1,
                                                },
                                            ])
                                        }
                                    />
                                    <InputError
                                        message={errors["social_links"]}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={data.email}
                                        className="mt-1 block w-full bg-slate-100 p-2"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="mt-2">
                                        <InputLabel
                                            htmlFor="password"
                                            value="Password"
                                        />

                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={data.password}
                                            className="mt-1 block w-full bg-slate-100 p-2"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirm Password"
                                        />

                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full bg-slate-100 p-2"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <LoadingButton
                                        className="bg-[#FEC93B] hover:bg-[rgb(249,205,82)] rounded-md w-full text-md"
                                        size="lg"
                                        disabled={processing}
                                        type="submit"
                                    >
                                        Register
                                    </LoadingButton>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Link href="/">
                        <div className="sm:hidden absolute top-2 right-3">
                            <CircleX className="h-6 w-6 text-red-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
