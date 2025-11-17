function Circle({ number, user, isLast }) {
  return (
    <div className="flex flex-col items-center w-30 p-3">
      <div
        className={`relative w-16 h-16 border border-[#D1D9E0] bg-[#ebeff2] text-black flex cursor-pointer items-center justify-center rounded-full font-bold
        ${!isLast ? "after:content-[''] after:absolute after:top-1/2 after:left-16 after:h-[1px] after:bg-[#D1D9E0] after:w-30 after:-translate-y-1/2 after:animate-grow" : ""}`}
      >
        {number}
      </div>

      <span>{user}</span>
    </div>
  );
}

export default Circle;
