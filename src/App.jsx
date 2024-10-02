import { useState } from "react";
import Header from "./component/header.jsx";
import Home from "./component/home.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-7">
      <Header 
        onSearchChange={setSearchQuery} 
        onSortChange={setSortOption} 
      />
      <Home 
        closeModal={closeModal} 
        isModalOpen={isModalOpen} 
        searchQuery={searchQuery}
        sortOption={sortOption} 
      />
    </div>
  );
};

export default App;