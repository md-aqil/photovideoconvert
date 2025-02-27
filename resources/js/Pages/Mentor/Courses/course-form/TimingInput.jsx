import InputError from "@/Components/InputError";
import { Button } from "@/shadcn/ui/button";
import { Label } from "@/shadcn/ui/label";
import { MinusCircleIcon, PlusCircle } from "lucide-react";
import React from "react";
import Can from "@/Components/Can";
import CourseTimeSlotForm from "./CourseTimeSlotForm";
import ShadcnCard from "@/Components/ShadcnCard";
import AvailableSlots from "./AvailableSlots";
import { CardHeader, CardTitle } from "@/shadcn/ui/card";

export default function TimingInput({ errors, data, setData, course }) {
    React.useEffect(() => {
        setData(
            "timings",
            course?.timings.map((item) => ({
                start_date: item.start_date,
                start_time: item.start_time,
                end_date: item.end_date,
                end_time: item.end_time,
                id: item.id,
            })) || []
        );
    }, [course?.timings?.length]);

    return (
        <ShadcnCard
            className="space-y-4"
            title={
                <div className="flex justify-between items-center">
                    <div className="font-semibold">Available Slots</div>
                    <Button
                        type="button"
                        size="icon"
                        onClick={() =>
                            setData("timings", [
                                ...data.timings,
                                {
                                    start_date: "",
                                    start_time: "",
                                    end_date: "",
                                    end_time: "",
                                    // id: "",
                                },
                            ])
                        }
                    >
                        <PlusCircle size={18} />
                    </Button>
                </div>
            }
        >
            {/* <Can permit="create package_time_slots"> */}
            <div>
                <CourseTimeSlotForm
                    data={data}
                    setData={setData}
                    course={course}
                    errors={errors}
                />
            </div>
            {/* </Can> */}
        </ShadcnCard>
    );
}
