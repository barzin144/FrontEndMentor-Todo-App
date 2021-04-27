import React from "react";
import TodoItem from "./todoItem";

const TodoList = () => {
    return (
        <div className="todoList">
            <TodoItem />
            <TodoItem />

        </div>
    );
};

export default TodoList;