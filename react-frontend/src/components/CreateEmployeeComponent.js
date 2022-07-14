import {React , useState} from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import EmployerServices from '../Services/EmployerServices';


export default function CreateEmployeeComponent(props) {
  
  const id = useParams().id;
  const [firstName, setfirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [emailId, setemailId] = useState('');

  const changeFirstName = (event)=>{
    setfirstName(event.target.value) ; 
  }
  const changeLastName = (event)=>{
    setLastName(event.target.value) ; 
  }
  const changeEmailId = (event)=>{
    setemailId(event.target.value) ; 
  }
  
  const updateEmployee = (e)=>{
    e.preventDefault(); 
    EmployerServices.getEmployeeByID(id).then((res) =>
     {
       let employee = res.data ; 
       setLastName(employee.lastName);
       setfirstName(employee.firstName);
       setemailId(employee.emailId);

     } )
    let employee = {
      firstName: firstName,emailId:emailId ,lastName: LastName
    }
    EmployerServices.updateEmployee(employee , id).then((res)=> {
      history("/");
    }) ;
  }
   
   


  const saveEmployee = (e)=>{
    e.preventDefault(); 
    let employee = {
      firstName: firstName,emailId: emailId,lastName: LastName
    }
    console.log('employee => '+ JSON.stringify(employee));

   
    EmployerServices.createEmployee(employee).then(res => {
        history("/");
    });
  
  
  }
  let history = useNavigate();
  const cancel = ()=>{
    history("/");
  }

  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className='text-center'>{props.name}</h3>
            <div className="card-body">
              <form className = "p-2">
                <div className='form-group mb-3'>
                  <label>First Name : </label>
                  <input placeholder='First name' name="firstName"  
                  className='form-control'
                  value = {firstName} onChange = {changeFirstName}
                   />
                   </div>
                   <div className='form-group mb-3'>
                  <label>Last Name : </label>
                  <input placeholder='Last Name' name="lastName"  
                  className='form-control'
                  value = {LastName} onChange = {changeLastName}
                   />
                   </div>
                   <div className='form-group mb-3'>
                  <label>Email Id : </label>
                  <input placeholder='email address' name="emailId"  
                  className='form-control'
                  value = {emailId} onChange = {changeEmailId}
                   />
                   </div>
                <button className="btn btn-success" onClick={props.method!=="add"?updateEmployee : saveEmployee}>
                    Save
                </button>
                <button className="btn btn-danger" onClick={cancel} style = {{marginLeft : '10px'}}>
                   Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
