import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/toDoList/toDoList'
import Inputs from './components/Inputs/Inputs'

function App() {
  const [tarefas, setTarefas] = useState(() => {
    let tarefasAntigas = localStorage.getItem("tarefas");
    return tarefasAntigas ? JSON.parse(tarefasAntigas) : []; 
  });

  const [inputTitulo, setInputTitulo] = useState('');
  const [inputTexto, setInputTexto] = useState('');
  const [editId, setEditId] = useState(null);

  const adicionarTarefa = () => {

    if(!inputTitulo || !inputTexto){
      return;
    } else {

      const novaTarefa = {
        id: Date.now(),
        titulo: inputTitulo,
        texto: inputTexto,
        steps: []
      }
      
      setTarefas([...tarefas, novaTarefa])
      setInputTitulo('')
      setInputTexto('');
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    console.log('teste', id)
  }

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))    
  }, [tarefas]);

  return (
    <>
    <div className='header'>
      <h1>DFE2 | React ToDoList</h1>  
      <p>Crie e organize suas tarefas!</p>
    </div>

      <Inputs
        inputTitulo={inputTitulo}
        setInputTitulo={setInputTitulo}
        inputTexto={inputTexto}
        setInputTexto={setInputTexto}
      />

      <div>
        <button className='addTarefa' onClick={adicionarTarefa}>+ Nova tarefa</button>
      </div>      

      {tarefas.length > 0 && (
        <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
      )}

    </>
  )
}

export default App
