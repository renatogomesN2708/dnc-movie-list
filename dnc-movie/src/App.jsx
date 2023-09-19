
import Header from './components/Header/Header'
import './index.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import MoviDetail from './pages/MoviesDetail/MovieDetail.jsx'
import { useState } from 'react'

function App() {

  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <div className='App' style={{ backgroundColor: "#303030"}}>
        <Header onSubmit={(inputValue) => setSearchValue(inputValue)}/>
        <Routes>
          <Route path="/" element={<Home searchValueProp={searchValue}/>}/>          
          <Route path="/movie/:id" element={<MoviDetail/>} />          
        </Routes>
      </div>
      
    </>
  )
}

export default App
