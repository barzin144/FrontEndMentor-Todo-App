import React from "react";

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            <div className={`todoItem__checkbox ${props.completed ? "checked" : ''}`} onClick={() => props.toggleCompletedHandler(props.id)}>
                <div className={`todoItem__checkbox-check ${props.completed ? "checked" : ''}`}></div>
            </div>
            <div className={`todoItem__text ${props.completed ? "checked" : ''}`}>
                <span onClick={() => props.toggleCompletedHandler(props.id)}>
                    {props.title}
                </span>
            </div>
            <span className="todoItem__remove" onClick={() => props.removeHandler(props.id)}></span>
        </div>
    );
};

export default TodoItem;