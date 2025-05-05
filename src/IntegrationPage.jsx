"use client"

import { useState, useMemo } from "react"
import { categories, integrations } from "./data/integrations"
import CategoryFilter from "./components/CategoryFilter"
import SearchBar from "./components/SearchBar"
import IntegrationGrid from "./components/IntegrationGrid"
import Pagination from "./components/Pagination"


const ITEMS_PER_PAGE = 30

const IntegrationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const categoryMatch = selectedCategory === "All" || integration.category === selectedCategory
      const searchMatch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredIntegrations.length / ITEMS_PER_PAGE)
  const paginatedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  return (
    <div className="integrations-page">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category)
          setCurrentPage(1)
        }}
      />
      <main className="main-content">
        <div className="header-section">
          <h1>Integrations</h1>
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query)
              setCurrentPage(1)
            }}
          />
        </div>
        <div className="grid-container">
          <IntegrationGrid integrations={paginatedIntegrations} />
        </div>
        <div className="footer-section">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>
    </div>
  )
}

export default IntegrationsPage
