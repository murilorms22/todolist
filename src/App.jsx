import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/toDoList/toDoList'
import Titulos from './components/Titulos/Titulos'
import Inputs from './components/Inputs/Inputs'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputTitulo, setInputTitulo] = useState('');
  const [inputTexto, setInputTexto] = useState('');

  const adicionarTarefa = () => {
    console.log(tarefas)
    setTarefas([...tarefas, setTarefas])
    setInputTitulo('')
    setInputTexto('');
  };

  return (
    <>
      <Titulos/>
      <Inputs
        inputTitulo={inputTitulo}
        setInputTitulo={setInputTitulo}
        inputTexto={inputTexto}
        setInputTexto={setInputTexto}
      />
      <div>
        <button onClick={adicionarTarefa}>+ Nova tarefa</button>
      </div>        
      {tarefas.lenght > 0 && <ToDoList tarefas={tarefas} />}
    </>
  )
}

export default App
