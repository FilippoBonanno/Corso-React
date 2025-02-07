import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)
  const imgUrl = "https://picsum.photos/seed/picsum/400/300"

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl}>
          CHILDREN PROP
        </Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl}></Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl}></Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl}></Card>

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
