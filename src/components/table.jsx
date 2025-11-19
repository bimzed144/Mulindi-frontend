// components/DynamicTable.jsx
import React from "react";

function DynamicTable({ fields, data, actions = [], onAction }) {
  return (
    <table className="w-full border border-gray-300 rounded">
      <thead className="bg-gray-200">
        <tr>
          {fields.map((f) => (
            <th key={f.name} className="p-2 text-left">{f.label}</th>
          ))}
          {actions.length > 0 && <th className="p-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-100">
            {fields.map((f) => (
              <td key={f.name} className="p-2 ">{row[f.name]}</td>
            ))}
            {actions.length > 0 && (
              <td className="p-2 flex gap-2">
                {actions.includes("view") && (
                  <button
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => onAction("view", row)}
                  >
                    View
                  </button>
                )}
                {actions.includes("update") && (
                  <button
                    className="text-green-600 hover:underline cursor-pointer"
                    onClick={() => onAction("update", row)}
                  >
                    Update
                  </button>
                )}
                {actions.includes("delete") && (
                  <button
                    className="text-red-600 hover:underline cursor-pointer"
                    onClick={() => onAction("delete", row)}
                  >
                    Delete
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
