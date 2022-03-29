import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({entrada}) => {
    
    const {
      id,
      titulo,
      resumen,
      imagen,
      published_at : fecha,
    } = entrada;


  return (
    <article>
      <Image
        src={imagen.url}
        alt={`imagen blog ${titulo}`}
        width={800}
        height={600}
        layout="responsive"
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(fecha)}</p>
        <p className={styles.resumen}>{resumen}</p>

        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>
              Leer entrada
          </a>
        </Link>
      </div>
    </article>
  );
}

export default Entrada