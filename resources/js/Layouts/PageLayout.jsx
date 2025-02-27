import React from "react";
import Header from "@/Layouts/Header";
import Footer from "./Footer";
import { Head, usePage } from "@inertiajs/react";
import { Toaster } from "@/shadcn/ui/sonner";
import { toast } from "sonner";
const AdminGlobalHeader = React.lazy(() =>
    import("@/Components/Admin/AdminGlobalHeader")
);

export default function PageLayout({ children, title, metaDescription }) {
    const { flash } = usePage().props;

    React.useEffect(() => {
        if (flash.message) {
            const options = {
                description: flash.description,
                position: "top-right",
            };
            if (flash.type === "success") {
                toast.success(flash.message, options);
            } else {
                toast.error(flash.message, options);
            }
        }
    }, [flash]);
    return (
        <>
            <Head title={title}>
                <meta name="description" content={metaDescription} />
            </Head>
            {/* {auth &&
                auth.user &&
                auth.userRoles &&
                auth.userRoles.includes("admin") && <AdminGlobalHeader />} */}
            <Header />
            <div className="content">{children}</div>
            <Toaster position="top-right" richColors />
            <Footer />
        </>
    );
}
