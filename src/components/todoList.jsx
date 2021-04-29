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
    Filter: 0
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

            return { ...state, Items: todos, LastId: state.LastId + 1 };

        case 'remove':
            const items = state.Items.filter(x => x.id !== action.peyload);

            return { ...state, Items: items };

        case 'clearCompleted':
            const notCompleteds = state.Items.filter(x => x.completed !== true);

            return { ...state, Items: notCompleteds };

        case 'toggleCompleted':
            const item = state.Items.find(x => x.id === action.peyload);
            item.completed = !item.completed;

            return { ...state, Items: state.Items };

        case 'setFilter':
            return { ...state, Filter: action.peyload };

        default:
            break;
    }
}

const TodoList = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    let todos;
    switch (state.Filter) {
        case 0:
            todos = state.Items;
            break;
        case 1:
            todos = state.Items.filter(x => x.completed === false);
            break;
        case 2:
            todos = state.Items.filter(x => x.completed === true);
            break;
        default:
            break;
    }
    const itemRemaining = state.Items.filter(x => x.completed === false).length;
    const filters =
        <>
            <span onClick={() => dispatch({ type: 'setFilter', peyload: 0 })} className={`${state.Filter === 0 ? "active" : ""}`}>All</span>
            <span onClick={() => dispatch({ type: 'setFilter', peyload: 1 })} className={`${state.Filter === 1 ? "active" : ""}`}>Active</span>
            <span onClick={() => dispatch({ type: 'setFilter', peyload: 2 })} className={`${state.Filter === 2 ? "active" : ""}`}>Completed</span>
        </>;
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
                    <div className="filters hide-for-mobile">
                        {filters}
                    </div>
                    <span className="clearCompleted" onClick={() => dispatch({ type: 'clearCompleted' })}>Clear Completed</span>
                </div>
            </div>
            <div className="hide-for-desktop">
                <div className="todoList__filters">
                    {filters}
                </div>
            </div>
        </>
    );
};

export default TodoList;