import React from 'react'
import './Register.css'

export const Register = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <span> Product registration </span>
        <div className='card-body'>
          <div className='row'>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Name: </label>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *SKU: </label>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <div className='form-group'>
                <label> Description: </label>
                <textarea className='form-control' />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Price: </label>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label> *Provider: </label>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>

          
          <div className='row'>
            <div className='col-md-1'>
              <button className='btn btn-success'> Save </button>
            </div>

            <div className='col-md-1'>
              <button className='btn btn-primary'> Clear </button>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}
