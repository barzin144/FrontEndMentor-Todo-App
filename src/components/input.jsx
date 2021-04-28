import React from "react";

const Input = (props) => {
    const [inputValue, setInputValue] = React.useState('');

    const onKeyPessHandler = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setInputValue('');
            props.addHandler(inputValue);
        }
    }

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="inputWrapper">
            <input placeholder="Create a new todo..." value={inputValue} onChange={onChangeHandler} onKeyPress={onKeyPessHandler} />
        </div>
    );
};

export default Input;