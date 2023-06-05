import React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';

function App (){
  const [tarefa, setTarefa] = useState([
      'Pagar a conta de luz',
      'Estudar React Hooks'
  ]);
const [input, setInput] = useState('');
function handleAdd(){
  setTarefa([...tarefa, input])
  setInput('');
}

  return(
    <div>
      <ul>
        {tarefa.map(tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}  />
      <button type='button' onClick={handleAdd} >
        Adicionar
      </button>
    </div>
  )
}
export default App;