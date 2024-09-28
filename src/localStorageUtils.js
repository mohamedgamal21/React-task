
export const saveProductsToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
};

export const getProductsFromLocalStorage = () => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
};