import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGreed } from "./components/GifGreed";

const GifExpertApp = () => {
  //   const categories = ["One Punche", "Samurai X", "Dragon Ball"];
  const [categories, setcategories] = useState(["One Punche"]);
  //   const handleAdd = () => {
  //     //cuando usamos setCategories, le estamos cayendo encima al estado anterior
  //     //y esta creando un nuevo estado
  //     //para agregar elemento al arreglo sin cambiar el arreglo inicial
  //     //podemos usar el operador spreet (...), es decir extraer las categorias
  //     //y añadirles una nueva, de esta forma mantenemos las categorias anteriores
  //     //y añadimos una nueva
  //     // setcategories([...categories, "HunterXHunter"]);
  //     //otra solucion seria
  //     //el setcategories recibe un callback, el cual tiene
  //     //como primer argumento el valor del estado anterior, y obtenemos las categorias
  //     //entonces podemos regresar un nuevo arreglo con todas las categorias mas la nueva categoria
  //     setcategories((cats) => [...cats, "HunterXHunter"]);
  //   };
  return (
    <>
      <h2>GifExpertApp</h2>
      {/* le podemos pasar la funcion setCategories como una propiedad a nuestro componente*/}
      <AddCategory setcategories={setcategories}></AddCategory>
      <hr></hr>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          /* necesitamos una expresion que regrese algo
            usamos map=> este transforma cada uno de los elementos que estan dentro de su arreglo,
            es decir lo que sea que regremos en el map sera el nuevo valor para cada uno de los
            elementos del arreglo ejemplo return hola => ["hola","hola","hola"]
            el map recibe 2 argumentos, primero el elemento del arreglo y como segundo argumento
            el indice, este indice podria servir para el key pero 
            es volatil, es decir puede cambiar el indice, es mejor usar
            otro id unico para cada elemento, el key sirve para que react sepa cual
            ese el elemento que se esta iterando y si ese elemento cambia o necesita renderizar
            de vuelta, se basara en el key*/
          categories.map((category, i) => (
            //le pasamos la propiedad de categoria a nuestro componente de GifGreed
            //de igual forma el key es la category
            <GifGreed key={category} category={category}></GifGreed>
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
