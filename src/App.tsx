import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ListPage } from './routes/list';
import { PostPage } from './routes/post';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="app-content">
        <header><Link to="/"><h1>My Wonderful Blog</h1></Link></header>
        
        <section>
          <Switch>
            <Route exact path='/:postId'><PostPage /></Route>
            <Route path='/'><ListPage /></Route>
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
