import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function Changepage({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(1, currentPage - 4);
        const endPage = Math.min(totalPages, startPage + 9);

        if (endPage - startPage < 9) {
            startPage = Math.max(1, endPage - 9);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <span
                    key={i}
                    className={`border-b border-transparent hover:cursor-pointer mx-2 ${currentPage === i ? 'text-blue-600 font-bold' : ''}`}
                    onClick={() => changePage(i)}
                >
                    {i}
                </span>
            );
        }

        return pages;
    };

    return (
        <div className="flex flex-row justify-between items-center p-4 bg-gray-100 rounded">
            <div className="ml-2 flex flex-row items-center">
                <button
                    className="flex items-center px-4 py-2 text-black rounded hover:bg-transparent hover:text-blue-600"
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === totalPages}
                >
                    <FiArrowLeft className="ml-1"/>
                    <p>Previous</p>
                </button>
            </div>

            <div className="mx-4">
                {renderPageNumbers()}
            </div>

            <div className="ml-2">
                <button
                    className="flex items-center px-4 py-2 text-black rounded hover:bg-transparent hover:text-blue-600"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <p>Next</p>
                    <FiArrowRight className='ml-1' />
                </button>
            </div>
        </div>
    );
}