// Importantando o React
import React from "react";
// Importantando o component Home
import HomeScreen from "./screens/home";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
 
const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
  </Switch>
);
 
export default Routes;