import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/toDoList/ToDoList'
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
      alert("Uma nova tarefa somente pode ser cadastrada após o preenchimento dos campos TÍTULO e TEXTO.");
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

  const editTarefa = (tarefa) => {
    setInputTitulo(tarefa.titulo),
    setInputTexto(tarefa.texto),
    setEditId(tarefa.id)
  }

  const salvarEdicao = () => {
    if(!inputTitulo || !inputTexto){
      alert("Uma nova tarefa somente pode ser cadastrada após o preenchimento dos campos TÍTULO e TEXTO.");
      return;
    } else {

    const tarefaOriginal = tarefas.find((t) => t.id === editId);

    if (tarefaOriginal.titulo == inputTitulo && tarefaOriginal.texto == inputTexto) {
      setInputTitulo('')
      setInputTexto('')
      setEditId(null)
      return;
    }

    setTarefas((tarefas) => [...tarefas.filter((t) => t.id !== editId), {id: Date.now(), titulo: inputTitulo, texto: inputTexto, steps: tarefaOriginal.steps}]);

      setInputTitulo('')
      setInputTexto('')
      setEditId(null)

    }}

    const addStep = (tarefaId, stepTexto) => {
      if(!stepTexto) return;

      setTarefas((prev) =>  //passa por cada tarefa, atribuindo todas tarefas antigas + criando um novo step que recebe um id aleatorio e um texto novo para a certa
        prev.map((tarefa) => 
          tarefa.id == tarefaId
          ? {...tarefa,
            steps: [
              ...tarefa.steps,
              { id: Date.now(), texto: stepTexto }
            ]
          }
          : tarefa
        )
      )
    }

    const removeStep = (tarefaId, stepId) => {
      setTarefas((prev) => 
        prev.map((tarefa) => 
          tarefa.id == tarefaId
          ? {...tarefa,
            steps: tarefa.steps.filter((s) => s.id !== stepId)
          }
          : tarefa
        )
      )
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
        <button className='addTarefa' onClick={editId ? salvarEdicao : adicionarTarefa}>
          {editId ? "Salvar Alterações" : "+ Nova Tarefa"}
        </button>
      </div>      

      {tarefas.length > 0 && (
        <ToDoList
        tarefas={tarefas}
        removerTarefa={removerTarefa}
        editarTarefa={editTarefa}
        addStep={addStep}
        removeStep={removeStep}
        />
      )}

    </>
  )
}

export default App
