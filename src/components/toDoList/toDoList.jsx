import React from 'react'
import ItemTarefa from '../ItemTarefa/ItemTarefa';



function ToDoList({ tarefas }) {
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
          />
          )
      })}
      
      </>
  )
}


export default ToDoList;