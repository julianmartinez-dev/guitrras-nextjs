import { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Carrito.module.css';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalCarrito = carrito.reduce( (acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
    setTotal(totalCarrito);
  },[carrito]);

  return (
    <Layout pagina={'Carrito de Compras'}>
      <h1 className="heading"> Carrito de Compras </h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          <h2>Articulos</h2>
          {carrito.length === 0
            ? ' Carrito Vacio '
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      layout="responsive"
                      width={250}
                      height={500}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>

                      <select
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $<span>{producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                  <button type="button" className={styles.eliminar}
                    onClick = {() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
        </div>

        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del pedido</h3>
              <p>Total a pagar: ${total}</p>
            </>
          ):(
            <p>No hay nada</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
