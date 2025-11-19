//  const fields = [
//     { name: "name", label: "Name" },
//     { name: "email", label: "Email" },
//     { name: "role", label: "Role" },
//   ];
//   data=[
//     { id: 1, name: "John Doe", email: "dsfsd"},
//       {id: 2, name: "Jane Smith", email: "sdfwd"}
//   ];
import DynamicTable from '../../components/table';
function Classes() {
 

  return (
    <div className="w-full flex flex-col gap-3">
   <h1>Classes</h1>
   <DynamicTable  />
    </div>
  )
}
export default Classes;