export const getGifs = async (category) => {
  //encodeURI => quita los espacios en blanco
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=h4JOGyy03lks6KjzxrIKyixeVdiTUA0S`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //vamos a crear un nuevo objeto utiliozando map con la informacion del api
  //en este caso solo queremos el id, title y la url
  //con esta informacion generamos un nuevo objeto
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  //retorna una promesa que resuelve la coleccion de las imagenes
  return gifs;
};
