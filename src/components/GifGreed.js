import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
// import { getGifs } from "../helpers/GetGif";
import { GifGreedItem } from "./GifGreedItem";
//customHooks => es extraer logica de un componente para reutilizar de tal manera
//que sea sencillo utilizarlo nuevamente
//useEfeect => permite ejecutar cierto codigo de manera condicional
export const GifGreed = ({ category }) => {
  // const [Images, setImages] = useState([]);
  //si queremos renombrar una propiedad de un objeto colocamos :nombrenuevo
  const { data: images, loading } = useFetchGifs(category);
  // //necesitamos obtener la categoria y realizar una peticion http
  // //useEfeect => permite ejecutar cierto codigo de manera condicional
  // //el primer parametro que recibe es la funcion que queremos que ejecute
  // useEffect(() => {
  //   //llamamos a la funcion y esta retorna una promesa
  //   //para lo cual usamos un then y obtenemos las imagenes y estas imagenes la pasamos al setImages
  //   getGifs(category).then((imgs) => {
  //     setImages(imgs);
  //   });
  //   //el segundo parametro es un arreglo de dependecias
  //   //este arreglo vacio significa que la funcion que esta dentro del useEffects se ejecutara
  //   //cuando el componente es renderizado por primera vez,
  //   //si este useEffect la funcion getGifs se ejecutara cada vez que se renderiza todo el componente
  //   //
  //   //si la categoria cambia entonces volvera a ejecutar este userEffect
  // }, [category]);

  //   getGifs();
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid animate__backInDown">
        {/* si loading es true entonces mostrara Loading pero si es false
        entonces no va a mostrar nada */}
        {loading && <p className="animate__backInDown">Loading...</p>}
        {/* funcion flecha con llaves, necesita un return
        {Images.map((image) => {
            return <h3>{image.title}</h3>;
        })} */}
        {/* funcion flecha sin llaves y con parentesis, no necesita un return */}
        {images.map((img) => (
          //al usar ... => operador spreet, le mandamos de manera independiente cada propiedad
          <GifGreedItem {...img} key={img.id}></GifGreedItem>
        ))}
      </div>
    </>
  );
};
