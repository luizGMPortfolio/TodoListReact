import './CriarTarefa.css'


function CriarTarefa() {
  return (
    <div className='Criar'>
      <div className='box2'>
        <div className='criar-titulo'>
          <h2>Criar Tarefa:</h2>
        </div>
        <input type="text" placeholder='Digite o titulo' className='criar-input'/>
        <select name="" id="" className='criar-select'>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="pessoal">Pesssoal</option>
          <option value="estudo">Estudo</option>
        </select>
        <button className='criar-button'>Criar tarefa</button>
      </div>
    </div>
  )
}

export default CriarTarefa