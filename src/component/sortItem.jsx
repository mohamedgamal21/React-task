import Button from "./button.jsx";


export default function SortItem() {
    return (
        <div
            className="flex 
            flex-col 
            sm:flex-row 
            justify-between 
            items-center 
            my-4 
            mx-4 
            w-full 
            sm:w-auto 
            space-y-4 
            sm:space-y-0"
        >
            <h1 className="text-center font-semibold justify-center w-full sm:w-auto text-base sm:text-base">Sort By</h1>
            <div className="flex justify-end my-4 mx-4 w-full sm:w-auto ">
                <select name="Sort by" id="sort-by"
                    className="border rounded px-4 py-2 mx-4 bg-white text-gray-700 w-full sm:w-auto h-12"
                >
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                </select>
                <Button />
            </div>
        </div>
    )
}