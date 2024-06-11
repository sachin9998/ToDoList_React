import { GoCheckCircleFill } from "react-icons/go";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (

    <div className="flex items-center my-3 gap-2">

      <div onClick={() => { toggle(id) }} className="flex flex-1 items-center cursor-pointer">

        {isComplete ? <GoCheckCircleFill size={25} className="text-orange-600" /> : <MdOutlineRadioButtonUnchecked color="grey" size={25} />}

        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>

      <MdDeleteOutline size={25} onClick={() => deleteTodo(id)} className="cursor-pointer" />
    </div>
  );
};

export default TodoItems;
