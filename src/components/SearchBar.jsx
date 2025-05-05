"use client"
import { Search } from "lucide-react"


const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search integrations..." onChange={(e) => onSearch(e.target.value)} />
      <Search className="search-icon" />
    </div>
  )
}

export default SearchBar
