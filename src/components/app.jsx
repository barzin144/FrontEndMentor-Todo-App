import React from "react";
import Header from "./header";
import Hero from "./hero";
import TodoList from "./todoList";

const App = () => {
    React.useEffect(()=>{
        const theme = localStorage.getItem('theme') || 'theme--light';
        document.documentElement.classList.add(theme);
    }, []);

    const themeSwitcher = () => {
        if (document.documentElement.classList.value === 'theme--light') {
            document.documentElement.classList.remove('theme--light');
            document.documentElement.classList.add('theme--dark');
            localStorage.setItem('theme', 'theme--dark');
        }
        else {
            document.documentElement.classList.remove('theme--dark');
            document.documentElement.classList.add('theme--light');
            localStorage.setItem('theme', 'theme--light');
        }
    }

    return (
        <>
            <div className="container">
                <Header themeSwicher={themeSwitcher} />
                <TodoList />
            </div>
            <Hero />
        </>
    );
};

export default App;