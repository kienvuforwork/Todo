import prisma from "@/server/db";
export const  getTodo = async (username:string) =>{
    const data = await prisma.todo.findMany();
      return data
}