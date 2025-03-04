import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card";
import { Checkbox } from "@/shadcn/ui/checkbox";
import { Label } from "@/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function B2BMentorshipForm() {
    const { b2BMentorshipFormData } = usePage().props;
    const { post, processing, data, setData } = useForm({
        isInterested: true,
        preferred_modes: ["Virtual"],
        interested_institutions: [b2BMentorshipFormData.isInterested[1]],
        minimum_hourly_rate: b2BMentorshipFormData.minimum_hourly_rate,
        open_to_long_duration_mentorship: true,
    });
    return (
        <form>
            <ol className="list-decimal ml-4">
                <li>
                    <Label>Are you interested in B2B mentorship?</Label>
                    <RadioGroup
                        value={data.isInterested}
                        onValueChange={(e) => setData("isInterested", e)}
                        className=""
                    >
                        {b2BMentorshipFormData.isInterested.map((f) => (
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={f.value} id={f.label} />
                                <Label htmlFor={f.label}>{f.label}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </li>
                <li>
                    <Label>Preferred Mentorship Mode:</Label>
                    <div className="space-y-2">
                        {b2BMentorshipFormData.preferred_modes.map((f) => (
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    value={f}
                                    id={f}
                                    onValueChange={() => {
                                        if (data.preferred_modes.includes(f)) {
                                            setData(
                                                "preferred_modes",
                                                data.preferred_modes.filter(
                                                    (m) => m == f
                                                )
                                            );
                                        } else {
                                            setData(
                                                "preferred_modes",
                                                data.preferred_modes.push(f)
                                            );
                                        }
                                    }}
                                />
                                <Label htmlFor={f}>{f}</Label>
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <Label>Institutions You Are Interested In:</Label>
                    <div className="space-y-2">
                        {b2BMentorshipFormData.interested_institutions.map(
                            (f) => (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        value={f}
                                        id={f}
                                        onValueChange={() => {
                                            if (
                                                data.interested_institutions.includes(
                                                    f
                                                )
                                            ) {
                                                setData(
                                                    "interested_institutions",
                                                    data.interested_institutions.filter(
                                                        (m) => m == f
                                                    )
                                                );
                                            } else {
                                                setData(
                                                    "interested_institutions",
                                                    data.interested_institutions.push(
                                                        f
                                                    )
                                                );
                                            }
                                        }}
                                    />
                                    <Label htmlFor={f}>{f}</Label>
                                </div>
                            )
                        )}
                    </div>
                </li>
            </ol>
        </form>
    );
}
