import './Filtrar.css'

function Filtrar() {
  return (
    <div id='Filtrar'>
      <div id='box1'>
        <div className='filtroSup'>
          <h2>Filtrar</h2>
        </div>
        <div className='filtroInf'>
          <div id='esquerda'>
            <h3>Status</h3>
            <select name="" id="">
              <option value="Todas">Todas</option>
              <option value="Todas">Trabalho</option>
              <option value="Todas">Pesssoal</option>
              <option value="Todas">Estudar</option>
            </select>
          </div>
          <div id='direita'>
            <h3>Ordem alfabética</h3>
            <div className='button'>
              <button>Asc</button>
              <button>Desc</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filtrar;