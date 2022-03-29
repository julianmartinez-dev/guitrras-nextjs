import { useRouter } from 'next/router';

const EntradaBLog = () => {
  const router = useRouter();

  return <div>EntradaBLog</div>;
};

export async function getStaticPaths(){
    const url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(url)
    const entradas = await respuesta.json();

    const paths = entradas.map(entrada => ({
        params: { id: entrada.id.toString() }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const url = `http://localhost:1337/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada,
    },
  };
}

export default EntradaBLog;
