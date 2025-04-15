import React, { useEffect, useState } from 'react';

const EmployeeDBManagement: React.FC = () => {
const[employeeData,setEmployeeData]=useState([])

    useEffect(()=>{
      async function getData(){
           const response = await fetch('src/data/employeeDBManagement.json') 
           if(response.ok){
            const data = await response.json()
            setEmployeeData(data) 
           }else{
            console.error('Error fetching data:', response)
            setEmployeeData([]) 
            return
           }
           console.log('Data fetched successfully!')       
      }  
      getData()
    },[])
    console.log(employeeData)
    const handleEmployeeData = () => {
        console.log('Handling employee data...');
    };

    return (
        <div style={{
            width:'100%',
            height: '80vh',
            display:'grid',
            gridTemplateColumns: '1fr', // make it full width
            justifyContent:"center",
            alignItems:"center",
     
            
        }}>
            <h1>Employee Database Management</h1>
            <button onClick={handleEmployeeData}
            style={{
                width:"max-content"
            }}>Manage Employee Data</button>
            
            <div className='parent-div'>
                <div className='child-div'>

                </div>
                <div className='child-div'>
                     
                </div>
            </div>
        </div>
    );
};

export default EmployeeDBManagement;