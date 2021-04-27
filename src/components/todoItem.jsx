import React from "react";

const TodoItem = (props) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const checkboxClickHandler = () => {
        if (isChecked) {
            setIsChecked(false);
        }
        else{
            setIsChecked(true);
        }
    }
    return (
        <div className="todoItem" onClick={checkboxClickHandler}>
           <div className={`todoItem__checkbox ${isChecked ? "checked" : ''}`}>
               <div className={`todoItem__checkbox-check ${isChecked ? "checked" : ''}`}></div>
           </div>
           <div className={`todoItem__text ${isChecked ? "checked" : ''}`}>
               <span>
                   Compelete Online Javascript course
               </span>
           </div>
        </div>
    );
};

export default TodoItem;