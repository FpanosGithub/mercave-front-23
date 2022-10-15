import React from "react";

const Imagen = ({ nombre, alt, height, width }) => {
  try {
    // Import image on demand
    const image = require(`../../Static/${nombre}`);
    // If the image doesn't exist. return null
    if (!image) {console.log('NO HAY IMAGEN'); return null}
    return <img src={image} alt = {alt} height = {height} width = {width}/>;
  } 
  catch (error) {
    console.log(`Imagen con el nombre: "${nombre}" no existe`);
    return null;
  }
};

export default Imagen;