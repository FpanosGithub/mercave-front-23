function PrepararDatosCirculaciones (circulaciones)
{
    let datos = {
      velocidades:[],
      temperaturas:[],
      vel_maxima:0,
      tempa_max:0,
      tempb_max:0,
      tempa_med:0,
      tempb_med:0,
      tempa_min:1000,
      tempb_min:1000,
    }  
    let num = 0
    let sum_tempa = 0
    let sum_tempb = 0

    if (circulaciones.length>0)
      {
        circulaciones.forEach ((obj) => 
        {
          datos.velocidades.unshift({'vel':obj.vel})
          datos.temperaturas.unshift({'tempa':obj.tempa, 'tempb': obj.tempb})
          if (obj.vel>datos.vel_maxima){datos.vel_maxima = obj.vel}
          if (obj.tempa>datos.tempa_max){datos.tempa_max = obj.tempa}
          if (obj.tempb>datos.tempb_max){datos.tempb_max = obj.tempb}
          if (obj.tempa<datos.tempa_min){datos.tempa_min = obj.tempa}
          if (obj.tempb<datos.tempb_min){datos.tempb_min = obj.tempb}
          sum_tempa = sum_tempa + obj.tempa
          sum_tempb = sum_tempb + obj.tempb
          num = num +1
        })
      datos.tempa_med = (sum_tempb/num).toFixed(2)
      datos.tempb_med = (sum_tempb/num).toFixed(2)
    }
    else{
      datos.tempa_min = 0
      datos.tempb_min = 0
    }
return datos
}
 
export default PrepararDatosCirculaciones;