import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const RegistroList = () => {
  const { registros, delRegistro } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {registros.length > 0 ? (
        <React.Fragment>
          {registros.map((registro) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={registro.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {registro.descricao}
                </p>
                <p className="text-gray-600 mt-1">
                  {registro.local}
                </p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {registro.categoria}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <Link
                  to={`/edit/${registro.id}`}
                  title="Editar Registro">
                  <div className="bg-green-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </div>
                </Link>
                <button
                  onClick={() => delRegistro(registro.id)}
                  className="block bg-red-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                  title="Remover Registro">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-400 py-5">Sem dados para exibir. Favor adiconar ou recarregar a página.</p>
      )}
    </React.Fragment>
  );
};