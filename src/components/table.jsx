

function DynamicTable({ columns, data, actions = [], onAction }) {
  return (
    <table className="w-full overflow-hidden rounded-[5px] border border-gray-200">
      <thead className="bg-blue-200 rounded-2xl">
        <tr>
          {columns.map((col) => (
            <th key={col} className="p-2 text-black/80 text-left">
              {col}
            </th>
          ))}
          {actions.length > 0 && <th className="p-2 text-left">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-[#D1D9E0]  hover:bg-gray-100">
            {columns.map((col) => (
              <td key={col} className="border-b border-[#D1D9E0]  text-sm p-2">
                {row[col]}
              </td>
            ))}
            {actions.length > 0 && (
              <td className=" p-2 flex gap-2">
                {actions.includes("view") && (
                  <button
                    onClick={() => onAction("view", row) }
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                )}
                {actions.includes("update") && (
                  <button
                    onClick={() => onAction("update", row)}
                    className="text-green-600 hover:underline"
                  >
                    Update
                  </button>
                )}
                {actions.includes("delete") && (
                  <button
                    onClick={() => onAction("delete", row)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                )}
                {actions.includes("record") && (
                  <button
                    onClick={() => onAction("record", row)}
                    className="text-purple-600 hover:underline"
                  >
                    Record
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
