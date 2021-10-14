import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { HomePage } from './app/components/HomePage/HomePage';
import AghLogo from './agh-logo.png';
import QualtricsLogo from './Qualtrics-logo.svg';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 100px;
  width: 100%;
  padding: 10px 20px;
`

const AppName = styled.div`
  font-size: 32px;
  color: #282c34;
`

function App() {
  return (
    <div>
      <Header>
        <img src={AghLogo} className="logo" alt="AghLogo" />
        <AppName>Retrospective application</AppName>
        <img src={QualtricsLogo} className="logo" alt="QualtricsLogo" />
      </Header>

    <Router>
      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
