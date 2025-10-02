import React from 'react'
import './inputs.css'

function Inputs({ inputTitulo, setInputTitulo, inputTexto, setInputTexto }) {
  return (
    <>
    <div className='cardInputs'>

    <div>
        <p className='titulo'>Título</p>
        <textarea 
        type="text" 
        value={inputTitulo} 
        onChange={(e) => setInputTitulo(e.target.value)}/>
      </div>

      <div>
        <p className='titulo'>Texto</p>
        <textarea
        type="text"
        value={inputTexto}
        onChange={(e) => setInputTexto(e.target.value)}/>
      </div>

      </div>
      </>
  )
}

export default Inputs