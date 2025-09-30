import React from 'react'
import './ItemTarefa.css'

  function ItemTarefa({ tarefa }) {
  return (
    <div className='cardList'>
      <h1>{tarefa.titulo}</h1>
      <p>{tarefa.texto}</p>
    </div>
  )
}

export default ItemTarefa