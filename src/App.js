import './App.css';
import SignUpForm from './components/SignUpForm';
import ChoreList from './components/ChoreList';

function App() {
  return (
    <div className='App'>
      <div>Welcome to Chore Competition!</div>
      <SignUpForm/>
      <ChoreList/>
    </div>
  );
}

export default App;
