import React from "react";
import Header from "./header";
import Hero from "./hero";
import Input from "./input";
import TodoList from "./todoList";

const App = () => {
    React.useEffect(()=>{
        document.documentElement.classList.add('theme--light');
    }, []);

    const themeSwicher = () => {
        if (document.documentElement.classList.value === 'theme--light') {
            document.documentElement.classList.remove('theme--light');
            document.documentElement.classList.add('theme--dark');
        }
        else {
            document.documentElement.classList.remove('theme--dark');
            document.documentElement.classList.add('theme--light');
        }
    }

    return (
        <>
            <div className="container">
                <Header themeSwicher={themeSwicher} />
                <Input />
                <TodoList />
            </div>
            <Hero />
        </>
    );
};

export default App;