
function seleccionReducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'SELECCIONAR_MENU':
      return {...state,
                menu:action.payload,
                eje:'todos',
                vagon:'todos',
                bogie:'todos',
                cambiador:'todos', 
                };
    case 'SELECCIONAR_EJE':
      return {...state, menu: 'Ejes', eje:action.payload};
    case 'SELECCIONAR_VAGON':
      return {...state, menu: 'Vagones', vagon:action.payload};
    case 'SELECCIONAR_BOGIE':
      return {...state, menu: 'Bogies', bogie:action.payload};
    case 'SELECCIONAR_CAMBIADOR':
      return {...state, menu: 'Cambiadores', cambiador:action.payload};
    default:
      throw new Error('Acción no conocida');
    }
  }

  export default seleccionReducer;