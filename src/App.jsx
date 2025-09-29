import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/toDoList/toDoList'
import Inputs from './components/Inputs/Inputs'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputTitulo, setInputTitulo] = useState('');
  const [inputTexto, setInputTexto] = useState('');

  const adicionarTarefa = () => {

    const novaTarefa = {
      id: Date.now,
      titulo: inputTitulo,
      texto: inputTexto 
    }

    setTarefas([...tarefas, novaTarefa])
    setInputTitulo('')
    setInputTexto('');
  };

  return (
    <>
      <h1>DFE2 | React ToDoList</h1>  
      <p>Crie e organize suas tarefas!</p>

      <Inputs
        inputTitulo={inputTitulo}
        setInputTitulo={setInputTitulo}
        inputTexto={inputTexto}
        setInputTexto={setInputTexto}
      />

      <div>
        <button onClick={adicionarTarefa}>+ Nova tarefa</button>
      </div>        
      {tarefas.map(tarefa => (
        <div key={tarefa.id}>
          <p>{tarefa.titulo}</p>
          <p>{tarefa.texto}</p>
        </div>
      ))}
    </>
  )
}

export default App
