import DynamicForm from '../../components/dynamic';
import DynamicTable from '../../components/table';
import Modal from '../../components/form';
import { useState } from 'react';


function Classes() {


const  initialClassData= [
  { name: "L4SOD", numStudents: 50 },
  { name: "L3SOD", numStudents: 45 },
  { name: "L2SOD", numStudents: 40 },
  { name: "L1SOD", numStudents: 35 },
  { name: "L4SCI", numStudents: 48 },
  { name: "L3SCI", numStudents: 42 },
];

 const [classData, setClassData] = useState(initialClassData); 
const [isModalOpen, setIsModalOpen] = useState(false); 
const [modalType, setModalType] = useState(""); // "add" or "update"
const [selectedClass, setSelectedClass] = useState(null); // row being updated
const [openConfirm, setOpenConfirm] = useState(false); // for Delete confirmation
const [classToDelete, setClassToDelete] = useState(null); // row to delete
  

const classTableFields = [
  { name: "name", label: "Class Name", type: "text" },
  { name: "numStudents", label: "No. of Students", type: "number" }, // read-only
];

const editableClassFields = [
  { name: "name", label: "Class Name", type: "text" }, // only editable field
];




const handleAction = (type, row) => {
  if (type === "add") {
    setModalType("add");
    setSelectedClass(null);
    setIsModalOpen(true);
  }
  if (type === "update") {
    setModalType("update");
    setSelectedClass(row);
    setIsModalOpen(true);
  }
  if (type === "delete") {
    setClassToDelete(row);
    setOpenConfirm(true); // show delete confirm modal
  }
};

  return (
    <div className="w-full flex flex-col gap-3">
   <h1>Welcome to classes</h1>
     <div className="w-full flex items-center justify-between">
          <h1 className='font-bold'>Classes</h1>
            <button  className="bg-blue-500 text-white p-2 rounded mb-4"   onClick={() => handleAction("add")}>
        + Add Class
      </button>
        </div>
<DynamicTable fields={classTableFields} actions={[ "update" ,"delete"]} data={classData} onAction={handleAction}/>
{isModalOpen && (
  <Modal
    open={isModalOpen}
    title={modalType === "add" ? "Add Class" : "Update Class"}
    onClose={() => setIsModalOpen(false)}
  >
    <DynamicForm
      fields={editableClassFields} // only editable field (name)
      defaultValues={selectedClass || {}}
      onSubmit={(formData) => {
        if (modalType === "add") {
          setClassData([...classData, { ...formData, numStudents: 0 }]);
        } else if (modalType === "update") {
          setClassData(
            classData.map((cls) =>
              cls === selectedClass ? { ...cls, ...formData } : cls
            )
          );
        }
        setIsModalOpen(false);
      }}
    />
  </Modal>
)}
{openConfirm && (
  <Modal
    open={openConfirm}
    title="Confirm Delete"
    onClose={() => setOpenConfirm(false)}
  >
    <p>Are you sure you want to delete {classToDelete?.name}?</p>
    <div className="flex gap-2 mt-3">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setClassData(classData.filter((cls) => cls !== classToDelete));
          setOpenConfirm(false);
        }}
      >
        Delete
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded"
        onClick={() => setOpenConfirm(false)}
      >
        Cancel
      </button>
    </div>
  </Modal>
)}

    </div>
  )
}
export default Classes;