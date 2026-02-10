const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex gap-2 mt-4 justify-end">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index)}
                    className={`px-3 py-1 rounded border text-sm ${currentPage === index
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
