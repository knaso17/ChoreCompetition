import './App.css';
import SignUpForm from './components/SignUpForm';
// import ChoreList from './components/ChoreList';
import TournamentList from './components/TournamentList';

function App() {
  return (
    <div className='App'>
      <div>Welcome to Chore Competition!</div>
      <SignUpForm/>
      {/* <ChoreList/> */}
      <TournamentList/>
    </div>
  );
}

export default App;
