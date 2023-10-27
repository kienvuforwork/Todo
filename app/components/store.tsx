"use client";
import { TodoTypeClient } from "../model/todo";
import { useTodoStore } from "../hooks/useTodo";
interface StoreProps {
  data: TodoTypeClient[];
}

const Store: React.FC<StoreProps> = ({ data }) => {
  useTodoStore.setState((state) => {
    return { ...state, data: data };
  });
  return null;
};

export default Store;
