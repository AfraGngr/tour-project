import logo from './logo.svg';
import './App.css';
// import { NavBar } from "./components/Navbar/Navbar";
// import { Header } from "./components/Header/Header";
// import { Cards } from "./components/Cards/Cards";
import { Navigation, Header, Cards } from './components/index'


function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Header /> 
      <Cards /> 
    </div>
  );
}

export default App;
