import React from "react";
import Input from "./input";
import TodoItem from "./todoItem";

const initialState = JSON.parse(localStorage.getItem('todos')) || {
    Items: [
        { id: 1, title: "Compelete Online Javascript course", completed: true },
        { id: 2, title: "Jog around the park 3x", completed: false },
        { id: 3, title: "10 minutes meditation", completed: false },
        { id: 4, title: "Read for 1 hour", completed: false },
        { id: 5, title: "Pick up groceries", completed: false },
        { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false }
    ],
    LastId: 6,
    Filter: 'All'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const todos = state.Items;
            const newItem = {
                id: state.LastId + 1,
                title: action.peyload,
                completed: false
            };
            todos.push(newItem);

            return { Items: todos, LastId: state.LastId + 1 };

        case 'remove':
            const items = state.Items.filter(x => x.id !== action.peyload);

            return { Items: items, LastId: state.LastId };

        case 'clearCompleted':
            const notCompleteds = state.Items.filter(x => x.completed !== true);

            return { Items: notCompleteds, LastId: state.LastId };
    
        case 'toggleCompleted':
            const item = state.Items.find(x => x.id === action.peyload);
            item.completed = !item.completed;

            return { Items: state.Items, LastId: state.LastId };

        default:
            break;
    }
}

const TodoList = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    let todos = state.Items;
    const itemRemaining = state.Items.filter(x => x.completed === false).length;

    return (
        <>
            <Input addHandler={(title) => dispatch({ type: 'add', peyload: title })} />
            <div className="todoList">
                {todos.map(item =>
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        removeHandler={(id) => dispatch({ type: 'remove', peyload: id })}
                        toggleCompletedHandler={(id) => dispatch({ type: 'toggleCompleted', peyload: id })}
                    />
                )}
                <div className="todoList__stat">
                    <span className="remaining">
                        {itemRemaining > 0 ? itemRemaining : ""}
                        {itemRemaining > 1 ? " items left" : itemRemaining === 0 ? "no item left" : " item left"}   
                    </span>
                    <span className="clearCompleted" onClick={() => dispatch({ type: 'clearCompleted' })}>Clear Completed</span>
                </div>
                <div className="todoList__filters"></div>
            </div>
        </>
    );
};

export default TodoList;