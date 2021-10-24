import './App.css';
import * as React from 'react';
import ButtonAppBar from "./components/Menu";
import Contents from "./components/Contents";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <ButtonAppBar/>
        </header>
        <body className="App-body">
            <Contents/>
        </body>
    </div>
  );
}

export default App;
