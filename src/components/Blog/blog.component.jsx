import React from "react";
import BlogList from "./blog-list.component"; // We'll create this next

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Understanding React Hooks",
            excerpt: "An in-depth look at React Hooks and how to use them effectively in your projects.",
            date: "2025-01-10",
            link: "/blog/react-hooks",
        },
        {
            id: 2,
            title: "Tailwind CSS for Beginners",
            excerpt: "A comprehensive guide to getting started with Tailwind CSS in your web projects.",
            date: "2025-01-05",
            link: "/blog/tailwind-css",
        },
    ];

    return (
        <section className="blog-container py-12">
            <h2 className="text-3xl font-semibold text-center mb-6">Blog</h2>
            <hr className="border-gray-700 mb-6" />
            <BlogList blogs={blogs} />
        </section>
    );
};

export default Blog;
