import React, { useEffect, useState } from 'react'
import './ItemTarefa.css'
import './googleIcons.css'

  function ItemTarefa({ tarefa, onDelete, onEdit, onAddStep, onRemoveStep }) {
    const [mostraInput, setMostraInput] = useState(false);
    const [novoStep, setNovoStep] = useState('');

    const salvarStep = () => {
      if(!novoStep) return;

      onAddStep(novoStep);
      setNovoStep('')
      setMostraInput(false)

      console.log()
    }

    const abrirInput = () => {
      setMostraInput(true);
    };

      return (
        <div className='cardList'>
          <h1>{tarefa.titulo}</h1>
          <p>{tarefa.texto}</p>
          
          <div className='btns'>
          <button className='delete' onClick={onDelete}>
            <span className='material-icons'>delete</span>
          </button>
          <button className='edit' onClick={onEdit}>
            <span className='material-icons'>edit</span>
          </button>
          <button className='add' onClick={abrirInput}>
            <span className='material-icons'>add</span>
          </button>
          </div>

          <br />

          <p className='numEtapas'> 
            {tarefa.steps.length != 0 ? `${tarefa.steps.length}  etapa(s)` : 'Não há etapas'}
          </p>

          {!tarefa.steps || tarefa.steps.length == 0 
          ? ''
          : (
          
          <ul>
            {tarefa.steps.map((step) => (
              <li className='textoStep' key={step.id}>
                <div className='contentSteps'>
                <span>{step.texto}</span>
                <div className='btns'>
                  <button className='remove' onClick={() => onRemoveStep(step.id)}>
                    <span className='material-icons'>check</span>
                 </button>
                </div>
                </div>
              </li>
            ))}
          </ul>)
          }

          {mostraInput && (
            <div className='step'> 
              <input type="text" placeholder='Nova etapa...' value={novoStep} onChange={(e) => setNovoStep(e.target.value)}/>
              <button onClick={salvarStep}>Salvar</button>
            </div>
          )}

          

        </div>
    
  )
}

export default ItemTarefa