import React from 'react'
import ItemTarefa from '../ItemTarefa/ItemTarefa';

function ToDoList({ tarefas, removerTarefa }) {
  return (
    <>
      <div>
        <h2>Lista de Tarefas:</h2>
      </div>
      {tarefas.map((tarefa) => {
        return (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onDelete={() => removerTarefa(tarefa.id)}
          />
        )
      })}
      </>
  )
}


export default ToDoList;