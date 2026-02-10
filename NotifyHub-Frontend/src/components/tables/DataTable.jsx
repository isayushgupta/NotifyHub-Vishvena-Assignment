import { formatDate } from "../../utils/formatDate";


const DataTable = ({ columns, data, loading }) => {
    if (loading) {
        return (
            <div className="p-4 text-center text-gray-500">
                Loading...
            </div>
        );
    }

    return (
        <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b"
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="text-center py-6 text-gray-500"
                            >
                                No records found
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className="px-4 py-3 text-sm text-gray-700 border-b"
                                    >
                                        {col.key === "sentAt" ? formatDate(row[col.key]) : row[col.key]
}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
