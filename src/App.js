import React,{Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css'; 

const App = () => {

  const [users, setUsers] =useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState([]);

/* // Onerilen ,lk 30 kullanıcı
  async componentDidMount(){
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({users: res.data, loading: false});
  }
*/
  /////////
  const searchUsers= async text => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUsers(res.data.items);
    setLoading(false);
    };

    ///////
    const clearUsers= () => {
    setUsers([]);
    setLoading(false);
    };

   

    const getUser = async (username) => {
      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  
      setUser(res.data);
      setLoading(false);
    };
    ////////
    const getUserRepos = async (username) => {
      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  
      setRepos(res.data);
      setLoading(false);
    }

     ///////
     const showAlert = (msg, type) => {
      setAlert({ msg, type });

      setTimeout(() =>  setAlert(null), 5000);
    };
    return (
      <GithubState>

    <Router>
    <div className="App">
    <Navbar /> 
    <div className="container">
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
          <Search 
          searchUsers={searchUsers} 
          clearUsers={clearUsers} 
          showClear={users.length>0 ? true:false}
          setAlert={showAlert}
          />
          <Users loading={loading} users={users} />
             </Fragment>
            )}>

           </Route>
           <Route exact path='/about' component={About}></Route>
           <Route exact path='/user/:login' render={props => (
             <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} />
           )}></Route>
          </Switch>
          </div>
        </div>
     </div>
    </Router>
    </GithubState>
    );
    

}

  


export default App;
