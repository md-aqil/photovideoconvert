import { Head } from "@inertiajs/react";
import { Footer } from "./Footer";
import ShadcnProvider from "./shadcn-provider";
import { Toaster } from "sonner";

export default function BlankLayout({ children, title, metaDescription }) {
    return (
        <ShadcnProvider>
            <Head title={title}>
                <meta name="description" content={metaDescription} />
            </Head>
            <main className="w-full tracking-tight bg-background">
                {children}
            </main>
            <Footer />

            <Toaster position="top-right" richColors />
        </ShadcnProvider>
    );
}
