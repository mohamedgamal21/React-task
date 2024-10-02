import React, { useState } from 'react';
import SellItem from './SellItem.jsx';

export default function Button() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div>

            <button
                onClick={openModal}
                className="bg-lime-200 px-6 py-2 rounded
                h-12 text-lg w-full sm:w-auto flex items-center justify-center"
            >
                Sell Item
            </button>

            <SellItem
                isOpen={isModalOpen}
                closeModal={closeModal}
            />
        </div>
    );
}