import Index from 'pages/Index';
import Login from 'pages/login';
import Registro from 'pages/Registro';
import Admin from 'pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'

function App() {
  return (
    <Router>
      <Switch>
         <Route to='/login'>
            <Login/>
         </Route>
         <Route to='/registro'>
            <Registro/>
         </Route>
         <Route to='/admin'>
            <Admin/>
         </Route>
         <Route to='/'>
            <Index/>
         </Route>
      </Switch>
    </Router>
  
  );
}





export default App;
