import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout='responsive'
            src="/img/nosotros.jpg"
            alt="Imagen nosotros"
            width={600}
            height={450}
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis ultricies cursus. Praesent eu tincidunt nulla. Phasellus
              vitae tristique eros. Cras quis pulvinar metus. Proin ut ligula
              aliquet, feugiat tellus ac, faucibus orci. Proin dapibus lacinia
              leo eu commodo. Quisque ornare dapibus commodo. Maecenas velit
              nulla, dictum eu eleifend elementum, ultricies quis risus. In
              scelerisque lectus ac dolor aliquam, eget laoreet tellus
              vestibulum. Nullam ac egestas tortor, vitae lobortis nisi.
            </p>
            <p>
              In convallis congue facilisis. Nunc felis dui, placerat a tellus
              quis, faucibus rutrum nunc. Curabitur vehicula sagittis risus, vel
              vestibulum lectus hendrerit a. Aliquam erat volutpat. In hac
              habitasse platea dictumst. Maecenas consectetur tellus ac risus
              consectetur, eget posuere erat gravida. Maecenas ornare libero
              rutrum purus dictum aliquet
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
