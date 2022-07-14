import './App.css'; 
import Footer from './components/Footer';
import HeaderComponent from './components/HeaderComponent';
import ListOfEmployee from './components/ListOfEmployee';
import { 
  BrowserRouter as Router,
  Routes,
  Route } 
  from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <>
    <Router>
    <HeaderComponent/>
  
    <Routes>
      <Route index
       element = {<ListOfEmployee/>}/>
      <Route path = "add-employee"
       element = {<CreateEmployeeComponent name = "Add Employee" method = "add"/>}/>
       <Route path = "/update-employee/:id"
       element = {<CreateEmployeeComponent name ="Update Employee" method = "put" />}/>
       <Route path = "/view-employee/:id"
       element = {<ViewEmployeeComponent/>}/>
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
