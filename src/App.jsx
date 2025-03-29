import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import List from './component/List'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Login/> }></Route>     
        <Route path='/user' element= { <List/> }></Route>        
      </Routes>
    </>
  )
}

export default App
