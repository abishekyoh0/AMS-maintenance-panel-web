import search from "../../assets/guide/search.png";
import book from "../../assets/guide/book.png";
import plumbing from "../../assets/guide/plumb.png"
import electrical from "../../assets/guide/electrical.png"
import hvac from "../../assets/guide/hvac.png"
import carpentry from "../../assets/guide/car.png"
import painting from "../../assets/guide/paint.png"
import cleaning from "../../assets/guide/clean.png"
import lock from "../../assets/guide/lock.png"
import { useState } from "react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type Props = {
  onFilterChange: (search: string, category: string) => void;
};

const categories = [
  { name: "All Services", image: book },
  { name: "Plumbing", image: plumbing },
  { name: "Electrical", image: electrical },
  { name: "HVAC", image: hvac },
  { name: "Carpentry", image: carpentry },
  { name: "Painting", image: painting },
  { name: "Cleaning", image: cleaning },
  { name: "Locksmith", image: lock },
];


const SearchFilter = ({ onFilterChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onFilterChange(value, selectedCategory);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(searchTerm, category);
  };

  return (
    <div className="bg-[#FFFFFF0D] backdrop-blur-md p-6 rounded-2xl border border-[#FFFFFF33]">

      <div className="flex items-center gap-2 mb-2">
        <img src={search} alt="Search" className="w-4 h-4" />
        <p className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
        style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Search Providers</p>
      </div>

      <input
        type="text"
        placeholder="Search by name, phone, email, or employee ID..."
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        className={`w-full mb-6 px-4 py-3 rounded-xl 
                   bg-[#FFFFFF1A] border border-[#FFFFFF33] 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 
                   focus:ring-cyan-500 ${FONTSIZE[16]}`}
      style={{ fontWeight: WEIGHT.four }}/>

      <div className="flex items-center gap-2 mb-3">
        <img src={book} alt="Filter" className="w-4 h-4 object-contain" />
        <span className={`text-sm text-gray-400 ${FONTSIZE[14]}`}
        style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>
          Filter by Service Category
        </span>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, index) => (
 <button
  key={index}
  onClick={() => handleCategoryClick(cat.name)}
  className={`h-24 rounded-[14px] border
    ${selectedCategory === cat.name 
      ? "bg-cyan-500 border-cyan-500 text-white" 
      : "bg-[#FFFFFF0D] border-[#FFFFFF33] text-[#FFFFFF66] hover:bg-cyan-500 hover:text-white"}
    flex flex-col items-center justify-center cursor-pointer
    gap-2
    transition duration-200 ${FONTSIZE[12]}`}
  style={{ fontWeight: WEIGHT.seven }}
>
  <img 
    src={cat.image} 
    alt={cat.name} 
    className="w-6 h-6 object-contain"
  />
  {cat.name}
</button>

))}

      </div>
    </div>
  );
};

export default SearchFilter;
