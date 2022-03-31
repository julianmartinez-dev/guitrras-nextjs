import Link from "next/link"
import Image from "next/image";
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image src="/img/logo.svg" alt="Logo" width={400} height={100} />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image src="/img/carrito.png" alt="Carrito" width={25} height={20} layout="fixed"/>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header