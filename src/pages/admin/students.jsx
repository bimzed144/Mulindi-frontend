import { RxDropdownMenu } from "react-icons/rx";
import React from "react";
import DynamicTable from "../../components/table";
import Modal from "../../components/form";
import { useState } from "react";
import DynamicForm from "../../components/dynamic";
function students (){

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalType, setModalType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  
  function handleAction(type, row) {
  if (type === "view") {
    setSelectedStudent(row); 
    setModalType("view");
    setIsModalOpen(true);
  }

  if (type === "update") {
    setSelectedStudent(row); 
    setModalType("update");
    setIsModalOpen(true);
  }

  if (type === "delete") {
    setStudentToDelete(row); 
    setOpenConfirm(true);
  }
}

 const tableFields = [
  { label: "Full Name", name: "name" },
  { label: "Class", name: "class" },
  { label: "Gender", name: "gender" },
  { label: "Progress", name: "progress" },        
  { label: "Status", name: "status" },            
  { label: "Current Stage", name: "currentStage" }
];
const  data=[
  {
    name:"bimze",
    class :"l4sod",
    gender : "male",
    progress : "IN_progress",
    status : "Paid",
    currentStage : "Admin"
  }
];
 const editableFields = [
  { label: "Full Name", name: "name", type: "text" },
  { label: "Class", name: "class", type: "text" },
  {
    label: "Gender",
    name: "gender",
    type: "select",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
];

    return (
     

        <div>
            <h1>Students page</h1>

        <div className="w-full flex justify-between">
          <h1></h1>
            <button onClick={() => {
    setModalType("add");       
    setSelectedStudent(null);   
    setIsModalOpen(true);       
  }} className="bg-blue-500 text-white p-2 rounded mb-4">
        + Add Student 
      </button>
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-bold">Students</h1>
          <div className="flex gap-40">
          <select className=" rounded-[4px] border-1 px-8 py-1" id="">
            <option value=""><RxDropdownMenu />Class</option>
            <option value="">L4sod</option>
            <option value="">L3sod</option>
            <option value="">L4sod</option>
            <option value="">L4sod</option>
          </select>
           <select className=" rounded-[4px] border-1 px-8 py-1" id="">
            <option value=""><RxDropdownMenu />Progress</option>
            <option value="">Admin</option>
            <option value="">Bursar</option>
            <option value="">Dod</option>
            <option value="">Matron</option>
          </select>
           <select className=" rounded-[4px] border-1 px-8 py-1" id="">
            <option value=""><RxDropdownMenu />Status</option>
            <option value="">Paid</option>
            <option value="">Pending</option>
          
          </select>
          </div>
        </div>
        <div className="mt-3">
             <DynamicTable 
             fields={tableFields}
             data={data}
             actions={["view","delete","update"]}
              onAction={(type, row) => handleAction(type, row)}
             />
             <Modal open={isModalOpen} title={modalType === "view" ? "View Student" : modalType === "add"? "Add Student" : "Update student"} onClose={() => setIsModalOpen(false)}>
              {(modalType === "add" || modalType === "update")  &&(
            <DynamicForm  fields={editableFields} defaultValues={selectedStudent || {}}/>)}
            {modalType === "view" && selectedStudent && (
              <div >
               <p> {selectedStudent.name} </p>
              </div>
            )}
             </Modal>

             <Modal
             open={openConfirm}
             title="Confirm Delete"
             onClose={() => setOpenConfirm(false)}
              >
  <p>Are you sure you want to delete <strong>{studentToDelete?.name}</strong>?</p>
  <div className="flex gap-3 mt-4">
    <button
      className="bg-red-500 text-white p-2 rounded"
    >
      Delete
    </button>
    <button
      onClick={() => setOpenConfirm(false)}
      className="bg-gray-300 p-2 rounded"
    >
      Cancel
    </button>
  </div>
</Modal>


             </div>
        </div>
    )
}
export default students;