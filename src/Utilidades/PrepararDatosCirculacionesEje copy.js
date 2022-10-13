function PrepararDatosCirculaciones (circulaciones)

{
  if(circulaciones) {
    const datos = []  
    circulaciones.map ((obj) => {return datos.unshift({'vel':obj.vel, 'tempa':obj.tempa, 'tempb': obj.tempb})})
    return datos
  }
  return [{'vel':0, 'tempa':0, 'tempb':0}]

}
 
export default PrepararDatosCirculaciones;