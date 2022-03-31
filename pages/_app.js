import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {

    if(carrito.some( articulo => articulo.id === producto.id)) {
      
      const carritoActualizado = carrito.map( articulo =>{
        if( articulo.id === producto.id) {
            articulo.cantidad = producto.cantidad
          }
          return articulo;
        });
      setCarrito(carritoActualizado);
      
    }else{
      setCarrito([...carrito, producto]);
    }



    
  }
  return <Component {...pageProps} carrito={carrito} agregarProducto={agregarProducto} />;
}

export default MyApp;
