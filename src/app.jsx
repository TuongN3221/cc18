// Task 2
import React from "react";
import Greetings from "./components/greeting";

function App() {
    return(
        <div>
            <h1>Welcome to the App Component</h1>
            <p>Edit <code>src/App.jsx</code> and save to reload.</p>
            <a 
            className="App-link"
            href="https://reactjs.org" 
            target="_blank" 
            rel="noopener noreferrer">
                Learn React
            </a>    
            <Greetings/>
        </div>
    );
}
export default App;
// This is the main App component that imports and uses the Greetings component.