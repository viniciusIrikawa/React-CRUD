import React, { useState, useEffect } from 'react'

export const Appointments = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('_PRODUCTS')){
        const storedList = JSON.parse(localStorage.getItem('_PRODUCTS'));
        setProducts(storedList);
        console.log(products)
    }
  }, [])

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
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return(
                  <tr key={index}>
                    <th scope="row"> {item.Name} </th>
                    <td> {item.SKU} </td>
                    <td> {item.Price} </td>
                    <td> {item.Provider} </td>
                  </tr>
                )}
              )}
            </tbody>
          </table>
        </div>        
      </div>         
  )
}
