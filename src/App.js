import React from 'react';
import Product from './Product';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const App = () => {
    return(
      <div>
           <BrowserRouter basename='/ShopySaven-ViewProducts'>
                   <Routes>
                      <Route exact path='/' index element={<Product/>}/>
                   </Routes>
          </BrowserRouter>
      </div>
    )
}

export default App;
