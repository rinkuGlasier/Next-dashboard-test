"use client";
import React, { useState } from "react";
import Image from "next/image";
import { blogPosts } from '@/app/Common/lib/data';

export default function BlogPage() {
  const postPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-5 mt-20">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-600 rounded-2xl p-5 wow animate__animated animate__fadeIn"
          >
            <Image src={post.img} width={300} height={300} alt="blog" />
            <h2>{post.heading}</h2>
            <p>{post.discription} </p>
            <p> {post.date} </p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-20">
          <ul className="flex  gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={` border border-white rounded-xl w-10 h-10 ${currentPage === index + 1
                    ? "text-white bg-blue-700"
                    : "text-blue-700 bg-white"
                    } `}
                >
                  {" "}
                  {index + 1}{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
