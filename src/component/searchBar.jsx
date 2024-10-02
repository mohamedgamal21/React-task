export default function SearchBar({ onSearchChange }) {
    const handleSearch = (e) => {
        onSearchChange(e.target.value); 
    };

    return (
        <div className="flex justify-start my-4">
        <div className="relative w-[500px] max-w-lg">
            <input
                type="search"
                placeholder="Search"
                onChange={handleSearch}
                className="rounded border py-2 pr-10 pl-4 w-full h-12"
            />
        </div>
        </div>
    );
}