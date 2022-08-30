import logo from './logo.svg';
import './App.css';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Header from './Components/Header/header';
import TakeNote1 from './Components/TakeNote1/takenote1';
import TakeNote2 from './Components/TakeNote2/takenote2';
import Dashboard from './pages/Dashboard/Dashboard';
import TakeNote3 from './Components/TakeNote3/takenote3';
import RouterComponent from './Router/Router';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Header /> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3 /> */}
      {/* <Dashboard /> */}
      {/* <RouterComponent /> */}
      <Provider store={store}>
        <RouterComponent />
      </Provider>


    </div>
  );
}

export default App;
