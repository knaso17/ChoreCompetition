import './App.css';
import SignUpForm from './components/SignUpForm';
// import ChoreList from './components/ChoreList';
import TournamentList from './components/TournamentList';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className='App'>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element ={<SignUpForm/>}/>
          <Route path="/tournaments" element={<TournamentList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
