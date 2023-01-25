import { Header } from "./components/Header";
//import React from "react"; = must have if using classes

/*class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}*/

function App() {
  //const name = 'Eva'
  //const x = true
  return (
    <div className="container">
{/* <h1>Hello From {name} {5+3} {x ? "Yes" : "No"}</h1>
    <h1>Hello From {name} </h1> */}
     <Header />
    </div>
  );
}

export default App;
