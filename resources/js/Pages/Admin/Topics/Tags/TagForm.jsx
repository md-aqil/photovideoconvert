import React from "react";
import InputError from "@/Components/InputError";
import { textToSlug } from "@/Helpers/GlobalFunctions";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn/ui/radio-group";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";

export default function TagForm({ tagData, topic, openFormDialogSet }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: tagData?.title || "",
        slug: tagData?.slug || "",
        activated_at: (tagData && tagData.activated_at) || !tagData ? "1" : "0",
        meta_tags: tagData?.meta_tags || "",
        description: tagData?.description || "",
        keywords: tagData?.keywords || "",
        schema: tagData?.schema || "",
    });

    const submit = (e) => {
        e.preventDefault();
        const routeName = tagData
            ? "admin.topics.tags.update"
            : "admin.topics.tags.store";
        const routeParams = tagData
            ? { topicId: topic.id, id: tagData.id }
            : { topicId: topic.id };

        post(route(routeName, routeParams), {
            onSuccess: () => {
                reset();
                openFormDialogSet(false);
            },
            onError: (errors) => {
                toast.error(
                    errors.slug ||
                        errors.title ||
                        errors.activated_at ||
                        "An error occurred while submitting the form.",
                );
            },
        });
    };
    // const submit = (e) => {
    //     e.preventDefault();
    //     if (tagData) {
    //         post(route("admin.topics.tags.update", { topicId: topic.id, id: tagData.id }));
    //         reset();
    //     } else {
    //         post(route("admin.topics.tags.store", { topicId: topic.id }));
    //     }
    //     openFormDialogSet(false)
    // };

    return (
        <form onSubmit={submit}>
            <div>
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    type="text"
                    name="title"
                    value={data.title}
                    autoFocus
                    className="mt-1 block w-full text-xl h-18"
                    placeholder="Enter Topic Title"
                    onChange={(e) => {
                        const title = e.target.value;
                        setData({
                            ...data,
                            title,
                            slug: tagData ? data.slug : textToSlug(title),
                        });
                    }}
                />
                {errors.title && (
                    <InputError message={errors.title} className="mt-2" />
                )}
            </div>

            <div className="mt-4">
                <Label htmlFor="activated_at">Status</Label>
                <RadioGroup
                    name="activated_at"
                    value={`${data.activated_at}`}
                    onValueChange={(value) => setData("activated_at", value)}
                    className="flex gap-x-4 mt-2"
                >
                    <Label
                        htmlFor="is_active"
                        className="flex items-center space-x-2 bg-slate-100 p-2 w-full border rounded"
                    >
                        <RadioGroupItem
                            value="1"
                            id="is_active"
                            aria-label="Active"
                        />
                        <span>Active</span>
                    </Label>
                    <Label
                        htmlFor="is_inactive"
                        className="flex items-center space-x-2 bg-slate-100 p-2 w-full border rounded"
                    >
                        <RadioGroupItem
                            value="0"
                            id="is_inactive"
                            aria-label="Inactive"
                        />
                        <span>Inactive</span>
                    </Label>
                </RadioGroup>
                {errors.activated_at && (
                    <InputError
                        message={errors.activated_at}
                        className="mt-2"
                    />
                )}
            </div>

            <div className="mt-4">
                <Label htmlFor="meta_tags">Meta Tags</Label>
                <Input
                    id="meta_tags"
                    type="text"
                    name="meta_tags"
                    value={data.meta_tags}
                    placeholder="Meta tags (comma separated or JSON)"
                    onChange={(e) => setData("meta_tags", e.target.value)}
                />
                {errors.meta_tags && (
                    <InputError message={errors.meta_tags} className="mt-2" />
                )}
            </div>
            <div className="mt-4">
                <Label htmlFor="description">Description</Label>
                <Input
                    id="description"
                    type="text"
                    name="description"
                    value={data.description}
                    placeholder="Description"
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && (
                    <InputError message={errors.description} className="mt-2" />
                )}
            </div>
            <div className="mt-4">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                    id="keywords"
                    type="text"
                    name="keywords"
                    value={data.keywords}
                    placeholder="Keywords (comma separated)"
                    onChange={(e) => setData("keywords", e.target.value)}
                />
                {errors.keywords && (
                    <InputError message={errors.keywords} className="mt-2" />
                )}
            </div>
            <div className="mt-4">
                <Label htmlFor="schema">Schema</Label>
                <Input
                    id="schema"
                    type="text"
                    name="schema"
                    value={data.schema}
                    placeholder="Schema (JSON-LD or text)"
                    onChange={(e) => setData("schema", e.target.value)}
                />
                {errors.schema && (
                    <InputError message={errors.schema} className="mt-2" />
                )}
            </div>

            <div className="flex justify-end mt-6">
                <Button
                    type="submit"
                    className="w-[260px]"
                    disabled={processing}
                >
                    {processing ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </form>
    );
}
