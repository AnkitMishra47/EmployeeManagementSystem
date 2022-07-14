import React,{ useState , useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import EmployerServices from "../Services/EmployerServices";

export default function ListOfEmployee(){
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees")
    .then(response => response.json())
    .then(data => setlist(data));
  });

  // state of employee list
  const [employees, setlist] = useState([]);

  // add employee function
  let history = useNavigate();
  const addEmployee=  ()=> {
    history("/add-employee");
  }
  history = useNavigate();
  const editEmployee =(id)=> {
    
    history(`/update-employee/${id}`);
  }
  const viewEmployee =(id)=> {
    
    history(`/view-employee/${id}`);
  }
  const deleteEmployee = (id)=>{
   let ans  = prompt("Are you sure ? if sure then type 'YES'");
    if(ans==="YES"){
    EmployerServices.deleteEmployee(id).then((res)=>{
      history("/");
    });
  }
    else{
      history("/");
    }
  }
  return (
    <>
    <div className="container">
      <h2 className="text-center m-3">Employees List</h2>
      <div className="my-2">
        <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="">

      <div className="row my-3">
        <table className="table table-striped table-bordered">
          <thead >
            <tr>
              
              <th className="text-center">Employee First Name</th>
              <th className="text-center">Employee Last Name</th>
              <th className="text-center">Employee email Id</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
           {
             employees.map(
               employee =>
               <tr key = {employee.id}>
               <td>{employee.firstName}</td>
               <td>{employee.lastName}</td>
               <td>{employee.emailId}</td>
               <td>
                <button  className="btn btn-info" onClick = {()=>editEmployee(employee.id)} >Update</button>
                <button  className="btn btn-danger m-2" onClick = {()=>deleteEmployee(employee.id)} >Delete</button>
                <button  className="btn btn-primary" onClick = {()=>viewEmployee(employee.id)} >view</button>
               </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
     </div>
      </div>
    </>
  );
}
