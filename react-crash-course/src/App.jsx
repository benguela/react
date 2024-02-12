import { useState } from 'react'
import './App.css'
import Post from './components/Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Post author="tim" body="abc"/>
      <Post author="bob" body="xyz" />
    </main>
  )
}

export default App
