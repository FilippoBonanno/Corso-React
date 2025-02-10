import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

// LEZIONE N.10
function App() {
  const [count, setCount] = useState(0)
  const imgUrl = "https://picsum.photos/seed/picsum/400/300"
  const cards = [
    {
      id: 1,
      title: "Tokyo",
      description: "descrizione",
      imgUrl: imgUrl,
      isVisited: true,
      children: "CHILDREN PROP",
    },
    {
      id: 2,
      title: "New York",
      description: "descrizione",
      imgUrl: imgUrl,
      isVisited: false,
      children: "CHILDREN PROP",
    },
    {
      id: 3,
      title: "Lisbona",
      description: "descrizione",
      imgUrl: imgUrl,
      isVisited: true,
      children: "CHILDREN PROP",
    },
    {
      id: 4,
      title: "Pechino",
      description: "descrizione",
      imgUrl: imgUrl,
      isVisited: false,
      children: "CHILDREN PROP",
    },
  ];


  return (
    <>
      <div className='grid grid-cols-4 gap-10'>
        {/* METODO .MAP PER ITERARE SU UN ARRAY */}
        {cards.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}
            description={city.description}
          >
            {city.children}
          </Card>
        ))}

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
