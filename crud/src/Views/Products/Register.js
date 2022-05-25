import React, { useEffect, useState } from 'react'
import './Register.css'

export const Register = () => {

  const initialData = {
    Name: '', 
    SKU: '', 
    Description: '', 
    Price: 0, 
    Provider: ''
  };

  const [form, setForm] = useState(initialData);

  useEffect(() => {
    if (localStorage.getItem('DataForm')) {
      const storedList = localStorage.getItem('DataForm')
      setForm(storedList);
    }
  }, [])

  const getData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({...form ,[name]:value })
  }

  const submitForm = () => {
    console.log(form)
    localStorage.setItem('DataForm', JSON.stringify(form))
  }
  
  const clearForm = () => {
    setForm(initialData)
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <span> Product registration </span>
        <div className='card-body'>
          <div className='row'>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Name: </label>
                <input type='text' className='form-control'  onChange={getData} name='Name' value={form.Name}/>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *SKU: </label>
                <input type='text' className='form-control' onChange={getData} name='SKU' value={form.SKU}/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label> Description: </label>
                <textarea className='form-control' onChange={getData} name='Description' value={form.Description}/>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Price: </label>
                <input type='text' className='form-control' onChange={getData} name='Price' value={form.Price}/>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Provider: </label>
                <input type='text' className='form-control' onChange={getData} name='Provider' value={form.Provider}/>
              </div>
            </div>
          </div>

          
          <div className='row'>
            <div className='col-md-1'>
              <button className='btn btn-success' onClick={submitForm}> Save </button>
            </div>

            <div className='col-md-1'>
              <button className='btn btn-primary' onClick={clearForm}> Clear </button>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
