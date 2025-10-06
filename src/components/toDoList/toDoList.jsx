import React from 'react'
import ItemTarefa from '../ItemTarefa/ItemTarefa';
import './ToDoList.css'

function ToDoList({ tarefas, removerTarefa, editarTarefa, addStep, removeStep }) {
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
          onAddStep={(texto) => addStep(tarefa.id, texto)}
          onRemoveStep={(stepId) => removeStep(tarefa.id, stepId)}
          />
        )
      })}
      </>
  )
}


export default ToDoList;