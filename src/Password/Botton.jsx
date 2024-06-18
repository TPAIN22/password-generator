import Right from "./iconComponent/right";
function Button() {
    
  return (
    <div
      className="relative text-center bg-[var(--green)] 
        div gap-8 px-8 py-4 mt-2 text-[var(--bgb)] font-bold 
        flex items-center justify-center hover:bg-[var(--bgb)]
        m3 border-2 border-[var(--green)] hover:text-[var(--green)]"
        
    >
      <button>GENERATE</button>
      <Right />
    </div>
  );
}
export default Button;
