// import { useState } from "react"
import Logo from '../logo/search.png'


export default function SearchBar() {
    // const [searchBar, setSearchBar] = useState();



    return (
        <div className="flex justify-start my-4">
            <div className="relative w-[500px] max-w-lg">
                <input
                    type="search"
                    placeholder="Search"
                    className="rounded border py-2 pr-10 pl-4 w-full h-12" 
                />
                <span className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    <img src={Logo} alt="Search Icon" className="h-5 w-5 text-gray-400" />
                </span>
            </div>
        </div>
    )
};