import React from 'react';
import Leagues from './component/Leagues/Leagues';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClubDetails from './component/ClubDetails/ClubDetails';
import Coditional from './component/CodiPractice/Coditional';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route path='/home'>
           <Leagues></Leagues>
         </Route>
         <Route exact path='/'>
          <Leagues></Leagues>
         </Route>
         <Route path='/club/:clubId'>
           <ClubDetails></ClubDetails>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
