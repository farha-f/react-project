
import './App.css';
import {HashRouter ,Route} from 'react-router-dom';
import Header from './header';
import Login from './login';
import Home from './home';
import Register from './register';
import Mycart from './cart';
import Dashboard from './dashboard';
function App() {
  return (
    <HashRouter >
      <Header></Header>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={Dashboard}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/register' component={Register}/>
     <Route exact path='/cart' component={Mycart}/>
    </HashRouter>
  );
}

export default App;
