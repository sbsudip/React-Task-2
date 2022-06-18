import React, { useEffect } from 'react';
import { useState } from 'react';
import api from './api';
export default function forms() {

    const [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [age, setAge] = useState(1),
        [submit, setSubmit] = useState(false) 
        ;  
  useEffect(()=>{
    api()
    .get()
    .then(result => {
        setFirstName(result.firstName)
        setLastName(result.lastName)
        setAge(result.age)
    })
    console.log(firstName +lastName + age)
    return()=>{
      api().delete()
         }

  },[submit])    

  function SubmitButton(e){
    e.preventDefault();
    setSubmit(true);  
    }
 
    return <div className='row'>
        <form>
            <div>
                <div className='form-group'>
                    <label>First Name :</label>
                    <input type="text" id="firstName" placeholder='First Name Please' value={firstName}onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Last Name :</label>
                    <input type="text" id="lastName" placeholder='Last Name Please' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label >Your Age :</label>
                    <input type="number" id="age" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='form-group center'>
                    <button className='btn btn-success m-3' onClick={(e) => SubmitButton(e)}>Submit</button>
                </div>
            </div>
        </form>
        {submit === true &&
            <div className='Righthand'>
                <div className='confirm'>
                    <h3>Detail About You</h3>
                    Welcome.....You are here.......
                </div>
            </div>}


    </div>
    


}