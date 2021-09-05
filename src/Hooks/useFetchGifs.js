//todos los hook empiezan con use

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGif";

//estos no son mas que funciones
export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    //cuando se utilize por primera vez el useFetchGifs
    //tendremos este estado que estara cargando por defecto
    data: [],
    loading: true,
  });
  //evaluamos unicamente el efecto cuando la categoria cambia, es decir se va a disparar
  //el efecto cuando inicie o se cambie la categoria
  useEffect(() => {
    //le vamos a mandar la informacion del nuevo estado
    //hacemos la peticion al api y cargamos las imagenes
    getGifs(category).then((imgs) => {
      //colocamos el timeout y despues de 3 seg le pasamos las imagenes a la data
      //y cambiamos el valor de loading a false
      setTimeout(() => {
        setstate({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);
  //y retornara este objeto
  return state;
};
