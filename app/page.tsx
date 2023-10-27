"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTodoStore } from "./hooks/useTodo";
const Home = () => {
  const router = useRouter();
  const todos = useTodoStore((state) => state.data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const filteredData = todos.filter((item) => item.username === "Kien");
    useTodoStore.setState((state) => {
      return { ...state, data: filteredData };
    });
    router.push(`/todo/${data.username}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 border-2 border-red-500">
          <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <input
              type="text"
              placeholder="What is your username!"
              className={`border-none text-blue-300 outline-none m-4 `}
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && (
              <p className="text-md text-center text-red m-1">
                You should provide your username!
              </p>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 rounded-full hover:opacity-80"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
