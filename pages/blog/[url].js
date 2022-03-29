import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css';

const EntradaBLog = ({ entrada }) => {
  const { id, titulo, contenido, imagen, published_at: fecha } = entrada;

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            src={imagen.url}
            alt={`imagen entrada ${titulo}`}
            width={600}
            height={400}
            layout="responsive"
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(fecha)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url},
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { url } = params;

  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada: entrada[0]
    },
  };
}

export default EntradaBLog;
