import React from 'react'
import './ItemTarefa.css'
import './googleIcons.css'

  function ItemTarefa({ tarefa, onDelete, onEdit }) {

      return (
        <div className='cardList'>
      <h1>{tarefa.titulo}</h1>
      <p>{tarefa.texto}</p>
      
      <div className='btns'>
      <button className='delete' onClick={onDelete}><span className='material-icons'>delete</span></button>
      <button className='edit' onClick={onEdit}><span className='material-icons'>edit</span></button>
      <button className='add'><span className='material-icons'>add</span></button>
      </div>
      
    </div>
    
  )
}

export default ItemTarefa