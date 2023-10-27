import Accordion from "@/app/components/accordion";
import prisma from "@/server/db";
import { headers } from "next/headers";
import Modal from "@/app/components/modal";
async function Delete(id: string) {
  "use server";
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
}
async function UpdateItem(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      complete: complete,
    },
  });
}

async function AddTodo(username: string, title: string, expectedDate: string) {
  "use server";
  const dateObj = new Date(expectedDate);
  await prisma.todo.create({
    data: {
      username: username,
      title: title,
      complete: false,
      expectedDate: dateObj,
    },
  });
}

const Home = () => {
  return (
    <div className="flex items-center justify-center px-[5rem] md:px-[15rem] xl:px-[28rem] flex-col pt-4">
      <div className="text-xl font-bold m-4"> Hello! Let's see what to do!</div>
      <Modal createTodo={AddTodo}></Modal>
      <Accordion deleteItem={Delete} complete={UpdateItem}></Accordion>
    </div>
  );
};

export default Home;
