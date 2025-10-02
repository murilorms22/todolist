import React from 'react'
import ItemTarefa from '../ItemTarefa/ItemTarefa';
import './ToDoList.css'

function ToDoList({ tarefas, removerTarefa, editarTarefa }) {
  return (
    <>
      <div>
        <h2 className='tituloToDoList'>Lista de Tarefas:</h2>
      </div>
      {tarefas.map((tarefa) => {
        return (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onDelete={() => removerTarefa(tarefa.id)}
          onEdit={() => editarTarefa(tarefa)}
          onAddEtapa={() => addEtapa(tarefa.id, nome)}
          />
        )
      })}
      </>
  )
}


export default ToDoList;