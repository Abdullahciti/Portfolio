const FunCard = ({icon, desc}) => {
    return ( 
            <div className="w-full flex flex-col items-center gap-2 py-8 borderRight borderBottom">
                <span className="text-yellow-300 my-2 text-3xl">{icon}</span>
                <p className="max-w-[85%] mx-auto text-center text-zinc-400 hover:text-white duration-200">{desc}</p>
            </div>
     );
}
 
export default FunCard;