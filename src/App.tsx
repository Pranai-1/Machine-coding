

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import TabFormComponent from './TabFormComponent'
import EmployeeDBManagement from "./EmployeeDBManagement"
function App() {


  return (
    <>
    <Router>
      <Routes>
         <Route path='/tab' element={<TabFormComponent/>}></Route>
         <Route path='/employee' element={<EmployeeDBManagement/>}></Route>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
