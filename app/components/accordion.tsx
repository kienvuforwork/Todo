"use client";
import React, { Fragment, use } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TodoTypeClient } from "../model/todo";
import TodoCard from "./todoCard";
import { useTodoStore } from "../hooks/useTodo";
import { useParams } from "next/navigation";
import { useState } from "react";

interface AccordionProps {
  complete: (id: string, complete: boolean) => void;
  deleteItem: (id: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({ complete, deleteItem }) => {
  const params = useParams();
  const data = useTodoStore((state) => state.data);
  const filteredData = data.filter((item) => item.username === params.username);
  const groupedData = filteredData.reduce((result: any, item) => {
    const dateKey = item.expectedDate; // You can also format the date if needed
    if (!result[dateKey]) {
      result[dateKey] = [];
    }
    result[dateKey].push(item);
    return result;
  }, {});

  const groupedDataList = Object.keys(groupedData).map((date) => ({
    date,
    items: groupedData[date],
  }));
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDate, setToggleDate] = useState("");
  const toggle = (date: string) => {
    setToggleDate(date);
    setIsOpen((prevState) => !prevState);
  };
  return groupedDataList.map((todos, ind) => (
    <Fragment key={ind}>
      <div
        onClick={() => toggle(todos.date)}
        className="w-[80%] mt-6 cursor-pointer hover:opacity-80  flex items-center justify-between border-[1px] p-4 rounded-xl"
      >
        <h1 className="font-bold">{todos.date}</h1>
        <div>
          {!isOpen ? (
            <BsChevronDown className="w-4 h-4"></BsChevronDown>
          ) : (
            <BsChevronUp></BsChevronUp>
          )}
        </div>
      </div>
      {todos.items.map((todo: TodoTypeClient, index: number) => (
        <TodoCard
          key={index}
          title={todo.title}
          complete={todo.complete}
          date={todos.date}
          id={todo.id}
          isOpen={isOpen && todos.date === toggleDate}
          updateItem={complete}
          deleteItem={deleteItem}
        ></TodoCard>
      ))}
    </Fragment>
  ));
};

export default Accordion;
