import { usePage } from "@inertiajs/react";

export const textToSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
};

export const getInitials = (name) => {
    const nameParts = name.split(" ");
    const initials = nameParts
        .map((part) => part.charAt(0).toUpperCase())
        .join("");
    return initials;
};

export const formatEnum = (value) => {
    if (!value) return "";
    return value
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const userHasRole = (role) => {
    const userRoles = usePage()?.props?.auth?.userRoles;

    if (
        !Array.isArray(userRoles) ||
        userRoles === null ||
        userRoles.length === 0
    ) {
        return null;
    }

    return userRoles[0].includes(role);
};

export const makeGridCols = (arr) => {
    let cols = [];
    const chunkSize = Math.ceil(arr.length / 2);
    for (let i = 0; i < arr.length; i += chunkSize) {
        cols.push([]);
        const chunk = arr.slice(i, i + chunkSize);
        chunk.map((item) => {
            cols[cols.length - 1].push(item);
        });
    }

    return cols;
};
