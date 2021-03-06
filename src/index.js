import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
