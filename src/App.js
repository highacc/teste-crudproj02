import './App.css';
import Navbar from './Pages/components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import Contas from "./Pages/components/Contas/Contas";
import Cadastrar from "./Pages/components/Cadastrar/Cadastrar";
import Edit from './Pages/components/Edit/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/> 
        <Route path="/todos/:id" element={<Contas/>}/> 
        <Route path="/add-conta" element={<Cadastrar/>}/> 
        <Route path="/edit-conta/:id" element={<Edit/>}/> 


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
