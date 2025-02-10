import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

// LEZIONE N.9
function App() {
  const [count, setCount] = useState(0)
  const imgUrl = "https://picsum.photos/seed/picsum/400/300"

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl} isVisited={true}>
          CHILDREN PROP
        </Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl} isVisited={false}>
          CHILDREN PROP
        </Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl} isVisited={true}>
          CHILDREN PROP
        </Card>
        <Card title="Tokyo" description="descrizione" imgUrl={imgUrl} isVisited={false}>
          CHILDREN PROP
        </Card>


      </div >

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
