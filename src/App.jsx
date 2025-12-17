import './App.css'
import { Routes, Route } from 'react-router'
import Apresentacao from './pages/Apresentacao/Apresentacao'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Apresentacao />} />
      </Routes>
    </div>
  )
}

export default App