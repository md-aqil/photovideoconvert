import { ScrollArea } from "@/shadcn/ui/scroll-area";
import { Head, Link } from "@inertiajs/react";
import { Checkbox } from "@/shadcn/ui/checkbox";
import RTable from "@/Components/RTable";
import AuthenticatedLayout from "@/Layouts/admin/AuthenticatedLayout";
import PageHeading from "@/Components/PageHeading";
import { formatDate } from "date-fns";
import { Badge } from "@/shadcn/ui/badge";
import { GraduationCap, User } from "lucide-react";
import { formatEnum } from "@/Helpers/GlobalFunctions";

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "full_name",
        header: "Name",
        cell: ({ row }) => (
            <div className="whitespace-nowrap">
                <p className="text-sm mb-1 ">
                    <Link
                        className="text-blue-500 underline underline-offset-4"
                        href={route("admin.mentees.view", row.original?.id)}
                    >
                        <strong>{row.original?.full_name}</strong>{" "}
                    </Link>
                </p>
            </div>
        ),
    },
    {
        accessorKey: "email",
        header: "Email",
    },

    {
        accessorKey: "created_at_string",
        header: "Created At",
        cell: ({ row }) => (
            <div>
                {formatDate(
                    row.getValue("created_at_string"),
                    "dd MMM, yyyy h:mm a",
                )}
            </div>
        ),
    },
];

export default function Mentees({ mentees }) {
    return (
        <AuthenticatedLayout>
            <Head>
                <title>Mentees</title>
            </Head>
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    <PageHeading>
                        <PageHeading.Title>
                            Mentees ({mentees.meta.total})
                        </PageHeading.Title>
                    </PageHeading>
                    <div className="grid gap-4 grid-cols-1">
                        <RTable
                            data={mentees.data}
                            columns={columns}
                            searchColumns={["created_at"]}
                            paginationLinks={mentees.links}
                            meta={mentees.meta}
                        />
                    </div>
                </div>
            </ScrollArea>
        </AuthenticatedLayout>
    );
}
