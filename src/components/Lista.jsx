import './Lista.css'

function Lista({ todo }) {
  return (
    <div>
      <div id='lista'>
        <div className='content'>
          <div className='lista-left'>
            <h3>{todo.text}</h3>
            <p className='category'>({todo.category})</p>
          </div>
          <div className='lista-right'>
            <div className='check'>
              <i className="fa-solid fa-square-check fa-lg"></i>
            </div>
            <div className='delete'>
              <i className="fa-solid fa-square-xmark fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lista