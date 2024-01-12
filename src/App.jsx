import { useState } from 'react'

import Background from './components/backgrounds'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './components/Lista'
import Pesquisa from './components/Pesquisa'
import Filtrar from './components/Filtrar'
import CriarTarefa from './components/CriarTarefa'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sitema",
      category: "Trabalho", 
      isCompleted: false,
    },
    {
      id: 2,
      text: "ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudar",
      isCompleted: false,
    },
  ])
  return (
    <div className='app'>
      <Background />
      <div className='container'>
        <h1>Lista de Tarefas</h1>
        <Pesquisa />
        <hr />
        <Filtrar />
        <hr />
        <div className='TodoList'>
          {todos.map((todo) =>(
            <Lista todo={todo}/>
          ))}
        </div>
        <hr />
        <CriarTarefa />
      </div>
      
    </div>
  )
}

export default App
