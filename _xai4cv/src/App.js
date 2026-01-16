import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import theme from './styles';

import Header from './components/Header';
import Home from './components/Home';
import Workshop_CVPR22 from './components/Workshop_CVPR22';
import Workshop_CVPR23 from './components/Workshop_CVPR23';
import Workshop_CVPR24 from './components/Workshop_CVPR24';
import Workshop_CVPR25 from './components/Workshop_CVPR25';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <header className="App-header">
              <Header/>
            </header>

            <div>
              <Route path="/" exact component={Home} />
              <Route path="/workshop_cvpr22" exact component={Workshop_CVPR22} />
              <Route path="/workshop_cvpr22/"><Redirect to="/workshop_cvpr22" /></Route>
              <Route path="/workshop_cvpr23" exact component={Workshop_CVPR23} />
              <Route path="/workshop_cvpr23/"><Redirect to="/workshop_cvpr23" /></Route>
              <Route path="/workshop_cvpr24" exact component={Workshop_CVPR24} />
              <Route path="/workshop_cvpr24/"><Redirect to="/workshop_cvpr24" /></Route>
              <Route path="/workshop_cvpr25" exact component={Workshop_CVPR25} />
              <Route path="/workshop_cvpr25/"><Redirect to="/workshop_cvpr25" /></Route>
            </div>

          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
