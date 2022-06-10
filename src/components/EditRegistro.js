import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditRegistro = (route) => {
  let history = useHistory();

  const { registros, editRegistro } = useContext(GlobalContext);

  const [escolhaUsuario, setEscolhaUsuario] = useState({
    id: null,
    descricao: "",
    local: "",
    categoria: "",
  });

  const atualUsuarioId = route.match.params.id;

  useEffect(() => {
    const registroId = atualUsuarioId;
    const escolhaUsuario = registros.find(
      (atualRegistroTraversal) => atualRegistroTraversal.id === parseInt(registroId)
    );
    setEscolhaUsuario(escolhaUsuario);
  }, [atualUsuarioId, registros]);

  const onSubmit = (e) => {
    e.preventDefault();
    editRegistro(escolhaUsuario);
    history.push("/");
  };

  const handleOnChange = (usuarioKey, novaEntrada) =>
    setEscolhaUsuario({ ...escolhaUsuario, [usuarioKey]: novaEntrada });

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={escolhaUsuario.descricao}
              onChange={(e) => handleOnChange("descricao", e.target.value)}
              type="text"
              placeholder="Título descritivo"
            />
          </div>

          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="local"
            >
              Local
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={escolhaUsuario.local}
              onChange={(e) => handleOnChange("local", e.target.value)}
              type="text"
              placeholder="Estabelecimento e cidade"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="categoria"
            >
              Categoria
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={escolhaUsuario.categoria}
              onChange={(e) => handleOnChange("categoria", e.target.value)}
              type="text"
              placeholder="Tipo de dado (experiência, formação, hobbie...)"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-blue-500 w-full hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Editar Registro
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