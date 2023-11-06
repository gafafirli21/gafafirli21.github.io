// import logo from './logo.svg';
import './App.css';

import Headerr from "./component/Headerr";
import Navbar  from "./component/Navbar";
import Hero  from "./component/Hero";
import Contact  from "./component/Contact";
import About  from "./component/About";

export default function MyApp(){
  return(
    <div className="container">
      <Headerr />
      <Navbar />
      <Hero />
      <About />
      <Contact />
      
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;