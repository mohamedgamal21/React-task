import { useEffect, useState } from 'react';
import { saveProductsToLocalStorage, getProductsFromLocalStorage } from './localStorageUtils';

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');

    useEffect(() => {
        const storedProducts = getProductsFromLocalStorage();
        setProducts(storedProducts);
    }, []);

    const addProduct = () => {
        if (newProduct) {
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        saveProductsToLocalStorage(updatedProducts);
        setNewProduct('');
        }
    };

    return (
        <div className="p-4">
        <h1 className="text-lg font-bold">Product Manager</h1>
        <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Add a new product"
            className="border rounded p-2"
        />
        <button onClick={addProduct} className="bg-blue-500 text-white rounded p-2 ml-2">
            Add Product
        </button>
        <ul className="mt-4">
            {products.map((product, index) => (
            <li key={index} className="border-b py-2">
                {product}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductManager;
