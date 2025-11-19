import React, { useState } from "react";

function DynamicForm({ fields, defaultValues = {}, onSubmit }) {
  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {fields.map(f => (
        <div key={f.name} className="flex flex-col">
          <label className="font-semibold">{f.label}</label>
          {f.type === "select" ? (
            <select
              name={f.name}
              value={formData[f.name] || ""}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select {f.label}</option>
              {f.options.map(o => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={f.type}
              name={f.name}
              value={formData[f.name] || ""}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-3"
      >
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
