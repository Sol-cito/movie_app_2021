import React from 'react';
import "./App.css";
import "./router/Home"
import About from './router/About';
import Home from './router/Home';
import { HashRouter, Route} from 'react-router-dom'

function App(){
  return (
  <HashRouter>
    <Route path ="/about/" exact={true} component={About} />
    <Route path ="/" exact={true} component={Home} />
  </HashRouter>
  )
}

export default App; // export 명령어로 다른 파일에서 App component를 사용할 수 있게 됨.
