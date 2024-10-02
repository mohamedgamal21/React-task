import { useState, useEffect, useRef } from 'react';

export default function SellItem({ isOpen, closeModal }) {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        category: '',
        price: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.image) newErrors.image = 'Image is required';
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.description) newErrors.description = 'Description is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.price) newErrors.price = 'Price is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        if (validateForm()) {

            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result;
                

                const dataToSave = {
                    ...formData,
                    image: imageUrl,  
                };


                const existingItems = JSON.parse(localStorage.getItem('items')) || [];
                const updatedItems = [...existingItems, dataToSave];
                localStorage.setItem('items', JSON.stringify(updatedItems));


                console.log("Saved item:", dataToSave);

                closeModal();
            };


            reader.readAsDataURL(formData.image);
        }

    };

    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-2">Sell an Item</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Upload Photos</label>
                        <input
                            type="file"
                            name="image"
                            className="border rounded w-full py-6 px-3 text-gray-700"
                            onChange={handleInputChange}
                            required
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="Enter item title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="Enter item description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Category</label>
                        <select
                            name="category"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="furniture">Furniture</option>
                            <option value="toys">Toys</option>
                            <option value="books">Books</option>
                        </select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Item Price</label>
                        <input
                            type="number"
                            name="price"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            placeholder="£"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-lime-200 text-stone-950 py-2 px-4 rounded w-full"
                        >
                            Upload Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
