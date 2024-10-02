
import SearchBar from "./searchBar.jsx";
import SortItem from "./sortItem.jsx";

export default function Header({ onSearchChange, onSortChange }) {
    return (
        <div className="flex justify-between">
            <SearchBar onSearchChange={onSearchChange} />
            <SortItem onSortChange={onSortChange} />
        </div>
    );
}
