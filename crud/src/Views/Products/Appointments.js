import React, { useState, useEffect } from 'react'
import './Appointments.css'

export const Appointments = () => {

  const [products, setProducts] = useState([]);

  const storedList = () => {
    const storedList = JSON.parse(localStorage.getItem('_PRODUCTS'));
    return storedList;
  }

  useEffect(() => {
    if(localStorage.getItem('_PRODUCTS')){
        setProducts(storedList());
    }
  }, [])

  const deleteData = (index) => {
    const obj = storedList().filter((item, i) => i !== index)
    localStorage.setItem('_PRODUCTS', JSON.stringify(obj))
    window.location.reload();
  }

  return (
      <div className='card'>
        <div className='card-header'> Registered Products </div>
        <div className='card-body'>
          <table className="table table-hover">
            <thead>
              <tr className='table-active'>
                <th scope="col"> Name </th>
                <th scope="col"> SKU </th>
                <th scope="col"> Price </th>
                <th scope="col"> Provider </th>
                <th scope="col"> Options </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return(
                  <tr key={index}>
                    <td scope="row"> {item.Name} </td>
                    <td> {item.SKU} </td>
                    <td> {item.Price} </td>
                    <td> {item.Provider} </td>
                    <td> 
                      <button className='btn btn-primary'> Edit </button> 
                      <button className='btn btn-danger' onClick={() => deleteData(index)}> Delete </button>
                    </td>
                  </tr>
                )}
              )}
            </tbody>
          </table>
        </div>        
      </div>         
  )
}
