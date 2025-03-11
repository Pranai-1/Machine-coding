
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import TabFormComponent from './TabFormComponent'
function App() {


  return (
    <>
    <Router>
      <Routes>
         <Route path='/tab' element={<TabFormComponent/>}></Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
