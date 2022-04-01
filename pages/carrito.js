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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-trash-x"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ff2825"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7h16" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      <path d="M10 12l4 4m0 -4l-4 4" />
                    </svg>
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
