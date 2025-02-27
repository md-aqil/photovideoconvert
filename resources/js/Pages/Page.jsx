import PageBanner from "@/Components/PageBanner";
import { config } from "@/Components/Puck/config";
import BlankLayout from "@/Layouts/blank-layout";
import Header from "@/Layouts/Header";
import PageLayout from "@/Layouts/PageLayout";
import { Head } from "@inertiajs/react";
import { Render } from "@measured/puck";

// const Page = ({ page }) => (
//     <Render
//         config={config}
//         data={page.puck_body || { content: [], root: {} }}
//     />
// );

// Page.layout = page => <PageLayout
//         children={page}
//         title={page.props.page.meta_title ? page.props.page.meta_title : page.props.page.title}
//         metaDescription={page.props.page.meta_description}
//     />

// export default Page;
export default function Page({ page }) {
    return (
        <BlankLayout>
            <div>
                <Head title={page.meta_title ? page.meta_title : page.title}>
                    <meta name="description" content={page.meta_description} />
                </Head>
                <Header />
                {/* <div dangerouslySetInnerHTML={{ __html: page?.body }}></div> */}
                <PageBanner title={page.title} />
                <div className="content overflow-y-visible h-auto">
                    <Render config={config} data={page.puck_body} />
                </div>
            </div>
        </BlankLayout>
    );
}
