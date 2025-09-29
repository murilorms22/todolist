import React from 'react'
import ItemTarefa from '../ItemTarefa/ItemTarefa';



function ToDoList({ nomeTarefa, numEtapas, descricao }) {
  return (
    <>
      <div>
        <h2>Lista de Tarefas:</h2>
      </div>
      {tarefas.map((tarefa) => {
        <ItemTarefa
          key={ItemTarefa.id}
          tarefa={tarefa}
          removerTarefa={removerTarefa}
          toggleEtapa={toggleEtapa}
          />
          
      })}
      
      </>
  )
}


export default ToDoList;