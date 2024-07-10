// import './App.css'
// import SignIn_UpPage from './components/SignIn_UpPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import SignIn_UpPage from './components/SignIn_UpPage';
import LoginPage from './components/LoginPage';


function App() {

  return (
    <LandingPage/>

    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/" component={SignIn_UpPage} />
    //       <Route path="/SignIn_UpPage" component={LoginPage} />
    //       <Route path="/SignIn_UpPage/LoginPage" component={SignIn_UpPage} />
    //     </Switch>
    //   </div>
    // </Router>

  )
}

export default App
