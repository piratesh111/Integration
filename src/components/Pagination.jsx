"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className="pagination-button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="pagination-icon" />
      </button>
      <span className="pagination-text">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="pagination-icon" />
      </button>
    </div>
  )
}

export default Pagination
