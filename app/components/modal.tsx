"use client";
import { useParams } from "next/navigation";
import { Fragment } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface ModalProps {
  createTodo: (username: string, title: string, expectedDate: string) => void;
}
const Modal: React.FC<ModalProps> = ({ createTodo }) => {
  const param = useParams();

  const username = param.username;
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (date === "" && date === "") {
      toast.error("You should provide both title and date!");
      return;
    }

    createTodo(username, title, date);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <Fragment>
      <button onClick={toggle} className="px-4 py-2 bg-blue-100 rounded">
        Add new todo!
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-blue-200">
          <div className="modal bg-white rounded-lg shadow-md p-4 w-1/2">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 border-2"
                onClick={closeModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter a title"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="expectedDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expected Date
                </label>
                <input
                  type="date"
                  id="expectedDate"
                  name="expectedDate"
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-300 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
