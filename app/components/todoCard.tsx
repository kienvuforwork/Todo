"use client";

import ConfettiButton from "./conffetiButton";
interface TodoCardProps {
  title: string;
  date: string;
  complete: boolean;
  id: string;
  isOpen: boolean;
  updateItem: (id: string, complete: boolean) => void;
  deleteItem: (id: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  title,
  date,
  complete,
  id,
  isOpen,
  deleteItem,
  updateItem,
}) => {
  const onDelete = (id: string) => {
    deleteItem(id);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    isOpen && (
      <div
        className={`border-[1px]  ${
          complete ? "border-blue-300 " : "border-blue-400"
        } rounded-full w-[80%] mt-2 py-2 px-4 flex justify-between items-center`}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex gap-2 text-md">
          <ConfettiButton
            complete={complete}
            onClick={() => updateItem(id, !complete)}
          ></ConfettiButton>
          <button
            onClick={() => onDelete(id)}
            className="border-[1px] border-red bg-red hover:opacity-80 rounded-full px-4 py-2"
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
};
export default TodoCard;
