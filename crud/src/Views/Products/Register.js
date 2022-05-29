import React, { useState } from 'react'
import { DoneMessage } from '../../Components/DoneMessage';
import './Register.css'

export const Register = () => {

  const PRODUCTS = '_PRODUCTS'

  const initialData = {
    Name: '', 
    SKU: '', 
    Description: '', 
    Price: 0, 
    Provider: '',
    Success: false
  };

  const [form, setForm] = useState(initialData);

  const getData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form ,[name]:value })
  }
  
  const submitForm = () => {
    const product = {
      Name: form.Name, 
      SKU: form.SKU, 
      Description: form.Description, 
      Price: form.Price, 
      Provider: form.Provider
    };
    saveInLocalStorage(product);
    setForm({ Success: true })
    console.log(form)
  }
  
  const clearForm = () => {
    setForm(initialData)
  }

  const saveInLocalStorage = (product) => {
    let products = localStorage.getItem(PRODUCTS)

    if(!products){
      products = []    
    }else{
      products = JSON.parse(products)
    }
    products.push(product);
    localStorage.setItem(PRODUCTS , JSON.stringify(products))
    clearForm();
  }

  return (
    <div className='card'>
      <div className='card-header'>
      {form.Success && <DoneMessage/>}
        <span> Product registration </span>
        <div className='card-body'>
          <div className='row'>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Name: </label>
                <input type='text' className='form-control'  onChange={getData} name='Name' value={form.Name} required/>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *SKU: </label>
                <input type='text' className='form-control' onChange={getData} name='SKU' value={form.SKU} required/>
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
                <input type='text' className='form-control' onChange={getData} name='Price' value={form.Price} required/>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Provider: </label>
                <input type='text' className='form-control' onChange={getData} name='Provider' value={form.Provider} required/>
              </div>
            </div>
          </div>

          
          <div className='row'>
            <div className='col-md-1'>
              <button className='btn btn-success' type='submit' onClick={submitForm}> Save </button>
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
