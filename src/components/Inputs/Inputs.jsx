import React from 'react'
import './inputs.css'

function Inputs({ inputTitulo, setInputTitulo, inputTexto, setInputTexto }) {
  return (
    <>
    <div className='cardInputs'>
    <div>
        <label>Título</label>
        <input type="text" id="inputTitulo" value={inputTitulo} onChange={(e) => setInputTitulo(e.target.value)}/>
      </div>
      <div>
        <label>Texto</label>
        <textarea type="text" id="inputTexto" value={inputTexto} onChange={(e) => setInputTexto(e.target.value)}/>
      </div>
      </div>
      </>
  )
}

export default Inputs