import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setcategories }) => {
  //dejamos el estado inicial en "" para que no se quede como undefined
  //si no colocamos nada en el estado inicial nos genera error
  const [InputValue, setInputValue] = useState("");
  //esta funcion se va a ejecutar cada ves que el input cambie
  const handleInputChange = (e) => {
    console.log(e.target.value);
    //el valor que se obtiene cada ves que se escriba en el input y ira agregando al InputValue
    //de esta forma tendremos el InputValue actualizado cada ves que se escriba en el input
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit Hecho");
    //.trim => elimina los espacios en blanco
    //si los espacios en blanco eliminados son mayores a 2 entonces va a agregar al arreglo
    if (InputValue.trim().length > 2) {
      setcategories((cats) => [InputValue, ...cats]);
      //una ves insertado, borramos el valor para que no se haga un doble posteo
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* el onChange se dispara cada vez que el input cambie */}
      <input
        type="text"
        value={InputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};
AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
