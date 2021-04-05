import react from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets"


function App() {
  //BEM
  return (
    <div className="app">
      
      {/*render the left side*/}
      {/**Sidebar */}
      <Sidebar />

      {/**Feed */ }
      <Feed />

      {/**Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
