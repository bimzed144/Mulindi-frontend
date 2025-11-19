
import { BsPerson } from "react-icons/bs";
import User from "../../components/user";

function Users() {
 

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex w-full justify-between">
        <h1 className="hello">Welcome to Users page</h1>
      </div>

      {/* Table Section */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Users </h1>
          <button
            className="bg-blue-400 w-40 p-2 rounded-[3px] hover:bg-blue-200"
          >
            + Add user
          </button>
        </div>

            <User role="Admin" name="Worker james" />
            <User  role="Bursar" name="Kaliza"/>
            <User  role="Dod" name="Muyango"/>
            <User  role="Matronn" name="Habiman"/>
            <User  role="Patron" name="Titi brown"/>
            <User  role="Store-keeper" name="Og 2 tone"/>
            

    
      </div>
    </div>
  )
}
export default Users;