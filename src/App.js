//import logo from './logo.svg';
import './App.css';

import { Switch,Route} from 'react-router-dom';
import { CityHoc } from './Components/City/City';
import { FoodHoc } from './Components/Foods/Foods';


function App() {
  return (
        <>
       <div className="App" >
         <Switch>
          <Route exact path="/" component={CityHoc}/>
          <Route  path="/foods" component={FoodHoc}/>
        </Switch>
        
       </div>
        </>
  );
}

export default App;
