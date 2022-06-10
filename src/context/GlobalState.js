import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  registros: [
    { id: 1, descricao: "Estágio Supervisionado", categoria: "Experiência", local: "Liferay Recife (Janeiro/2021 - Atualmente)" },
    { id: 2, descricao: "Monitoria Disciplina Banco de Dados", categoria: "Experiência", local: "Universidade Católica de Pernambuco (Março/2020 - Junho/2020)" },
    { id: 3, descricao: "Ensino Médio", categoria: "Formação Acadêmica", local: "Escola Estadual Professor Pio XV (Conclusão: Dezembro/2015)" },
    { id: 4, descricao: "Técnico em Rede de Computadores", categoria: "Formação Acadêmica", local: "Instituto Federal de Pernambuco (Conclusão: Dezembro/2016)" },
    { id: 5, descricao: "Aulas de Violino", categoria: "Atividades Extracurriculares", local: "Conservatório Pernambuco de Música (Fevereiro/2018 - Abril/2020)" },
    { id: 6, descricao: "Voluntariado em Serviços Comunitários", categoria: "Atividades Extracurriculares", local: "Casa do Estudante (Junho/2020 - Agosto/2020)" },
    { id: 7, descricao: "Prática de atividades esportivas: futebol e corrida", categoria: "Hobbies", local: "Paris Saint-Germain Academy - Recife" },
    { id: 8, descricao: "Participante de campeonatos locais de Xadrez", categoria: "Hobbies", local: "Clube do Xadrez - Recife" },
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addRegistro(registro) {
    dispatch({
      type: "INSERIR_REGISTRO",
      payload: registro
    });
  }

  function editRegistro(registro) {
    dispatch({
      type: "EDITAR_REGISTRO",
      payload: registro
    });
  }

  function delRegistro(id) {
    dispatch({
      type: "REMOVER_REGISTRO",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        registros: state.registros,
        addRegistro,
        editRegistro,
        delRegistro
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};