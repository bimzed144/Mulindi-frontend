import React, { useState } from "react";
import DynamicTable from '../../components/table';
import Modal from "../../components/form";

function Students() {
  const [data, setData] = useState([
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "Teacher" },
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [modalType, setModalType] = useState(""); // "view", "update", "add"
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email" },
    { name: "role", label: "Role" },
  ];

  // Handle table actions
  const handleAction = (action, row) => {
    if (action === "view" || action === "update") {
      setSelectedRow(row);
      setModalType(action);
      setIsModalOpen(true);
    } else if (action === "delete") {
      const confirmed = window.confirm(`Delete ${row.name}?`);
      if (confirmed) {
        setData(prev => prev.filter(r => r !== row));
      }
    }
  };

  // Handle Add / Update form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const student = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
    };

    if (modalType === "add") {
      // Add new student
      setData(prev => [...prev, student]);
    } else if (modalType === "update") {
      // Update existing student
      setData(prev => prev.map(r => (r === selectedRow ? student : r)));
    }

    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Students</h1>

      {/* Add Student Button */}
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => {
          setModalType("add");
          setSelectedRow(null);
          setIsModalOpen(true);
        }}
      >
        + Add Student
      </button>

      {/* Table */}
      <DynamicTable
        fields={fields}
        data={data}
        actions={["view", "update", "delete"]}
        onAction={handleAction}
      />

      {/* Modal */}
      <Modal
        open={isModalOpen}
        title={
          modalType === "add"
            ? "Add Student"
            : modalType === "update"
            ? "Update Student"
            : "View Student"
        }
        onClose={() => setIsModalOpen(false)}
      >
        {modalType === "view" && selectedRow && (
          <div>
            <p><strong>Name:</strong> {selectedRow.name}</p>
            <p><strong>Email:</strong> {selectedRow.email}</p>
            <p><strong>Role:</strong> {selectedRow.role}</p>
          </div>
        )}

        {(modalType === "add" || modalType === "update") && (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
            <input
              name="name"
              defaultValue={selectedRow?.name || ""}
              placeholder="Name"
              className="border p-1"
            />
            <input
              name="email"
              defaultValue={selectedRow?.email || ""}
              placeholder="Email"
              className="border p-1"
            />
            <input
              name="role"
              defaultValue={selectedRow?.role || ""}
              placeholder="Role"
              className="border p-1"
            />
            <button type="submit" className="bg-green-500 text-white p-1 rounded">
              {modalType === "add" ? "Add Student" : "Save Changes"}
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default Students;
