import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


