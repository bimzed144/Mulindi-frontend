import DynamicTable from "../../components/table";
import { useState } from "react";
import ModalForm from "../../components/form";

function Classes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalType, setModalType] = useState("");

  // ✅ Add your table data here
  const data = [
    { ID: 1, Name: "Alice", Class: "A1" },
    { ID: 2, Name: "Bob", Class: "B2" },
    { ID: 3, Name: "Charlie", Class: "C1" },
  ];

  // ✅ Table column headers
  const columns = ["ID", "Name", "Class"];

  // ✅ Handle action (view/update/delete)
  const handleAction = (type, row) => {
    setModalType(type);
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  // ✅ Handle form submission
  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
  };

  // ✅ Define dynamic form fields based on modalType
  const formFields = {
    update: [
      {
        label: "Name",
        name: "Name",
        type: "text",
        defaultValue: selectedRow?.Name || "",
      },
      {
        label: "Class",
        name: "Class",
        type: "text",
        defaultValue: selectedRow?.Class || "",
      },
    ],
    record: [
      {
        label: "Score",
        name: "score",
        type: "number",
        placeholder: "Enter score",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex w-full justify-between">
        <h1>Welcome to Users page</h1>
      </div>

      {/* Table Section */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">CLasses table</h1>
          <button
            className="bg-blue-400 w-40 p-2 rounded-[3px] hover:bg-blue-200"
            onClick={() => {
              setModalType("add");
              setIsModalOpen(true);
            }}
          >
            + Add Class
          </button>
        </div>

        {/* Table Component */}
        <DynamicTable
          columns={columns}
          data={data}
          actions={["view", "update", "delete"]}
          onAction={handleAction}
        />

        {/* Modal Form */}
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`${modalType} Student`}
          fields={formFields[modalType] || []}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
export default Classes;