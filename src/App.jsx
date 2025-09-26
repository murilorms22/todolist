import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>DFE2 | React ToDoList</h1>
        <p>Crie e organize suas tarefas!</p>
      </div>
      <div>
        <label>Título</label>
        <input type="text" name="inputTitulo" id="inputTitulo" />
      </div>
      <div>
        <label>Texto</label>
        <textarea name="inputTitulo" id="inputTitulo" />
      </div>
      <div>
        <button>+ Nova tarefa</button>
      </div>
      <div>
        <h2>Lista de Tarefas:</h2>
      </div>
      <div>
        <h2>1º - 'nomeTarefa'</h2>
        <button>x</button> <button>edit</button> <button>etapa</button>
        <details>
          <summary>Descrição | 'nº' etapas</summary>
          <p>Descrição (input textarea)</p>
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

export default App
