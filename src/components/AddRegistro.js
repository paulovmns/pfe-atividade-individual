import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const AddRegistro = () => {
  let history = useHistory();

  const { addRegistro, registros } = useContext(GlobalContext);

  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [local, setLocal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newRegistro = {
      id: registros.length + 1,
      descricao,
      categoria,
      local,
    };
    addRegistro(newRegistro);
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="descricao"
            >
              Descrição
            </label>
            <input autoFocus required 
              className="shadow appearance-none border rounded text-clip w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              placeholder="Título descritivo"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="local"
            >
              Local
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              type="text"
              placeholder="Estabelecimento e cidade"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="categoria"
            >
              Categoria
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              type="text"
              placeholder="Tipo de dado (experiência, formação, hobbie...)"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-blue-500 w-full hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Inserir Registro
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancelar</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};