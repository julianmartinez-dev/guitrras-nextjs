import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css';

const Producto = ({data}) => {

    const { descripcion, imagen, nombre, precio } = data[0];
  return (
    <Layout
        pagina={nombre}
    >
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

          <form className={styles.formulario}>
              <label>Cantidad</label>
              <select>
                    <option value="">--Seleccione---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>  
              </select>
              <input
                type="submit"
                value="Agregar al carrito"
              />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({query: {url}}){

    const URL = `${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta = await fetch(URL);
    const data = await respuesta.json();

    return{
        props: {
            data
        }
    }
}

export default Producto