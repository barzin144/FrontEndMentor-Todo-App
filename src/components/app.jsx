import React from "react";
import Header from "./header";
import Hero from "./hero";
import Input from "./input";

const App = () => {
    const [theme, setTheme] = React.useState('light');
    const themeSwicher = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }
    return (
        <div className={theme === 'light' ? "theme--light" : "theme--dark"}>
            <div className="page">
                <div className="container">
                    <Header themeSwicher={themeSwicher} />
                    <Input />
                </div>
                <Hero />
            </div>
        </div>
    );
};

export default App;