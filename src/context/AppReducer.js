export default function appReducer(state, action) {
  switch (action.type) {
    case "INSERIR_REGISTRO":
      return {
        ...state,
        registros: [...state.registros, action.payload],
      };

    case "EDITAR_REGISTRO":
      const updateRegistro = action.payload;

      const updateRegistros = state.registros.map((registro) => {
        if (registro.id === updateRegistro.id) {
          return updateRegistro;
        }
        return registro;
      });

      return {
        ...state,
        registros: updateRegistros,
      };

    case "REMOVER_REGISTRO":
      return {
        ...state,
        registros: state.registros.filter(
          (registro) => registro.id !== action.payload
        ),
      };

    default:
      return state;
  }
};