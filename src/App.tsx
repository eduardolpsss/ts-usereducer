import React, { useReducer } from 'react'

// Estado inicial do reducer (contagem)
type State = {
  count: number
}

// Acões possíveis para o reducer (incrementar e decrementar)
type Action = { type: 'increment' } | { type: 'decrement' }

// Função reducer que recebe o estado e a ação e retorna o novo estado
function reducer(state: State, action: Action): State {
  // Verifica qual ação foi executada e retorna o novo estado de acordo com a ação (incrementar ou decrementar)
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function App() {

  // useReducer recebe o reducer e o estado inicial e retorna o estado e a função de dispatch para atualizar o estado
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }

  return (
    <>
      <h2>
        The counter is: <span style={{ color: '#646cff' }}>{state.count}</span>
      </h2>

      <button style={{ marginRight: '10px' }} onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
