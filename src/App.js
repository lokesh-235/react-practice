import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar/nav';
import { Contact,About,Login,Home } from './Components/Main/main';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    <Login></Login>
    <About></About>
    <Contact></Contact>
    </>
    

  );
}

export default App;
