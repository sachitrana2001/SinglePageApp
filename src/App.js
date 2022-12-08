import { Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route path="/welcome"><Welcome/></Route>
      <Route path="/products"><Products/></Route>
      <Route path="/product-detail/:productId"><ProductDetail/></Route>
      </main> 
    </div>
  );
}

export default App;
