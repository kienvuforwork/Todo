import { create } from 'zustand';
import { TodoTypeClient, TodoTypeServer } from '../model/todo';


interface State  {
   data: TodoTypeClient[]
  }
 
interface Action{
    setData: (data: State["data"]) =>void,
}

 export const useTodoStore = create<State & Action>()((set) => ({
    data:[],
    setData: (data) => set(()=> ({data:data})),
  }))