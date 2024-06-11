import tick from "../assets/tick.png";
import untick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({text}) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-7" src={tick}></img>
        {/* <img src={untick}></img>
         */}
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>

      <img className="w-3.5 cursor-pointer" src={delete_icon}></img>
    </div>
  );
};

export default TodoItems;
