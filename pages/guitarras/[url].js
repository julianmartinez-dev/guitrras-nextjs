import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Guitarra.module.css';

const Producto = ({ data, agregarProducto }) => {
  const [cantidad, setCantidad] = useState(1);

  const { descripcion, imagen, nombre, precio, id } = data[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if( cantidad < 1 ) {
      return alert('La cantidad debe ser mayor a 0');
    }

    // Agregar producto al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    }

    agregarProducto(guitarraSeleccionada);
  };

  return (
    <Layout pagina={nombre}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={imagen.url}
          alt={`imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="">--Seleccione---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const URL = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(URL);
  const data = await respuesta.json();

  return {
    props: {
      data,
    },
  };
}

export default Producto;
