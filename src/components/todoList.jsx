import React from "react";
import TodoItem from "./todoItem";

const initialState = {
    list: [
        { id: 1, title: "Compelete Online Javascript course", completed: true },
        { id: 2, title: "Jog around the park 3x", completed: false },
        { id: 3, title: "10 minutes meditation", completed: false },
        { id: 4, title: "Read for 1 hour", completed: false },
        { id: 5, title: "Pick up groceries", completed: false },
        { id: 6, title: "Complete Todo App on Frontend Mentor", completed:false }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'remove':
            const newList = state.list.filter(x => x.id !== action.peyload);
            return { list: newList };
        case 'toggleCompleted':
            const item = state.list.find(x => x.id === action.peyload);
            item.completed = !item.completed;
            return { list: state.list};
        default:
            break;
    }
}

const TodoList = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div className="todoList">
            {state.list.map(item =>
                <TodoItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    completed={item.completed}
                    removeHandler={(id) => dispatch({ type: 'remove', peyload: id })}
                    toggleCompletedHandler={(id) => dispatch({ type: 'toggleCompleted', peyload: id })}
                />
            )}
        </div>
    );
};

export default TodoList;