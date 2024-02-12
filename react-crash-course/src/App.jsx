import { useState } from 'react'
import './App.css'
import Post from './components/Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  )
}

export default App
