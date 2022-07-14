import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployerServices from "../Services/EmployerServices";

export default function ViewEmployeeComponent() {
  let id = useParams().id;

  const [employee, setemployee] = useState([]);

  useEffect(() => {
    EmployerServices.getEmployeeByID(id).then((res) => {
      setemployee(res.data);
    });
  });
  
 let obj = {
    textAlign : 'justify',
    fontSize : '20px',
    fontWeight : '600',
    margin : '5px',
    
 }

 let obj2 = {
    fontSize : '15px',
    textAlign : 'justify',
    color : '#407034',
    fontWeight : '550',
 }
let history = useNavigate();
 const goHome= ()=>{
     history("/");
 }
  return (
    <div className="m-3">
      <div className="  card col-md-6 offset-md-3">
        <h3 className="text-center">Employee Details</h3>
        <div className=" container card-body">
            

         <table className="table table-striped table-bordered">
            <tbody>
                <tr>
                <td style={obj}>Employee First Name </td>
                <td style={obj2}>{employee.firstName}</td>
                </tr>
                <tr>
                <td style={obj}>Employee Last Name </td>
                <td style={obj2}>{employee.lastName}</td>
                </tr>
                <tr>
                <td style={obj}>Employee email Id </td>
                <td style={obj2}>{employee.emailId}</td>
                </tr>
                
               
            </tbody>
          </table>
            <button className="btn btn-primary" onClick={goHome}>Go Home </button>
        </div>
      </div>
    </div>
  );
}
