// import Button from "./button.jsx";
import SearchBar from "./searchBar.jsx";
import SortItem from "./sortItem.jsx";


export default function Header() { 
    return (
        <div className="flex justify-between">
            <SearchBar />
            <SortItem />
            {/* <Button /> */}
        </div>
    )
};