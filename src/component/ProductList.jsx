import Product from "./product.jsx";

export default function ProductList({ products }) {

    if (products.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-700 text-2xl">No items available</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-between">
            {products.map((product, index) => (
                <Product
                    key={index}
                    image={product.image}
                    title={product.title}   
                    price={product.price}
                />
            ))}
        </div>
    );
}
