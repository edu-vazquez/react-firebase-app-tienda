// FUNCIONES PARA DEFINIR RUTAS
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// CONTEXTO 
import { CartProvider } from './context/CartContext'
// COMPONENTES
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Nosotros from './componentes/Nosotros'
import Contacto from './componentes/Contacto'
import Cart from './componentes/Cart'
import Inicio from './componentes/Inicio'
import Checkout from './componentes/Checkout'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path='/' element={ <Inicio /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />
          <Route path='/nosotros' element={ <Nosotros /> } />
          <Route path='/productos' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoria' element={ <ItemListContainer /> } />
          <Route path='/contacto' element={ <Contacto /> }/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/checkout' element={ <Checkout />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
