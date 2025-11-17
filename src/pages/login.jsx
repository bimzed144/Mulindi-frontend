function Login(){

    return(
        <div className="w-full h-screen flex justify-center items-center">
   
    <div className=" flex flex-col  p-2 items-center gap-10  ">
         <h1 className="font-bold text-4xl text-blue-600">MULINDI SCS</h1>
        <form action="" className="flex border rounded-[4px] bg-[#ffffff] border-[#D1D9E0] gap-2 p-4 flex-col">
          <h1 className="text-2xl text-center text-blue-950">Login</h1>
            <label className="text-lg">Username</label>
            <input type="text" name="" id="" className="focus:outline-blue-400 w-80 h-10 indent-2 border border-[#D1D9E0] rounded-[4px]" />
            <label className="text-lg">Role</label>
          <select name="" id=""  className="focus:outline-blue-400 w-80 h-10 border border-[#D1D9E0] rounded-[4px]">
            <option value="">Admin</option>
            <option value="">Bursar</option>
            <option value="">Dod</option>
            <option value="">Matron</option>
            <option value="">Patron</option>
            <option value="">Store-keeper</option>
          </select>
          <label className="text-lg">Password</label>
          <input type="password" name="" id=""  className="focus:outline-blue-400 border border-[#D1D9E0] rounded-[4px] w-80 h-10 indent-2" />

           <button className="bg-blue-400   w-40 mt-9 p-2 rounded-[3px] self-center hover:bg-blue-200">Login</button>
        </form>
    </div>
        </div>
    )

}
export default Login;