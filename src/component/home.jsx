import { useState, useEffect } from "react";
import ProductList from "./ProductList.jsx";
import ChangePage from "./changePage.jsx";

// Utility function to get items from localStorage
const getItemsFromLocalStorage = () => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
};

export default function Home({ searchQuery, sortOption, closeModal, isModalOpen }) {
    const [products] = useState(getItemsFromLocalStorage());
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let result = [...products];

        // Filter products by search query
        // Filter products by search query
        if (searchQuery) {
            result = result.filter(product => 
                product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }


        // Apply sorting based on the selected option
        if (sortOption === "a-z") {
            result.sort((a, b) => a.title.localeCompare(b.name));
        } else if (sortOption === "z-a") {
            result.sort((a, b) => b.title.localeCompare(a.name));
        } else if (sortOption === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        }

        // Update the filteredProducts state
        setFilteredProducts(result);
    }, [searchQuery, sortOption, products]);

    return (
        <div className="my-4">
            <ProductList products={filteredProducts} />
            <ChangePage totalPages={10} />
        </div>
    );
}