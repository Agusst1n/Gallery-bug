import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './views/Home'
import Test from './views/Test'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='home' element={<Home/>} />
          <Route path='test' element={<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
