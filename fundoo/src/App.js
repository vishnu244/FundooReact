import logo from './logo.svg';
import './App.css';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Header from './Components/Header/header';
import TakeNote1 from './Components/TakeNote1/takenote1';
import TakeNote2 from './Components/TakeNote2/takenote2';
import Head from './Components/TakeNote2/takenote2';

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Header /> */}
      {/* <TakeNote1/> */}
      <TakeNote2/>
  
    </div>
  );
}

export default App;
