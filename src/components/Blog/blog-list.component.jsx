import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                    <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                    <Link to={blog.link} className="text-indigo-500 hover:text-indigo-400">
                        Read More &rarr;
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
