import React from 'react'



function ToDoList({ nomeTarefa, numEtapas, descricao }) {
  return (
    <>
      <div>
        <h2>Lista de Tarefas:</h2>
      </div>
      <div>
        <h2>1º - ${nomeTarefa}</h2>
        <button>x</button> <button>edit</button> <button>etapa</button>
        <details>
          <summary>Descrição | ${numEtapas} etapas</summary>
          <p>Descrição ${descricao}</p>
          <details>
            <summary>if existe Etapas</summary>
            <ol>
              <li>teste. número esquerda e x para excluir a direita</li> <button>x</button>
            </ol>
          </details>
        </details>
      </div>
      </>
  )
}


export default ToDoList;