import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/menu';
import 'app.scss';
 
 
const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Menu/>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;