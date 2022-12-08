import { Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader/>
      <main><Route path="/Welcome"><Welcome/></Route>
      <Route path="/Products"><Products/></Route></main>
      
    </div>
  );
}

export default App;
