import React, { useEffect, useState } from 'react'
import { deleteOne, getAll } from '../API/index.js';
const Product = ({product,setproduct,getProducts}) => {




  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>

      <div className="container py-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Favorite</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {product.map((el,index) =>
              <tr key={index}>
                <th scope="row">{el.id}</th>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td> <button className='btn btn-primary '>Favorite</button></td>
                <td>
                  <button className='btn btn-danger ' onClick={
                    async () => {
                      await deleteOne(el.id)
                      setproduct((product) => {
                        return product.filter((x) => x.id != el.id)
                      })
                    }
                  } >Delete</button>
                </td>
                <td> <button className='btn btn-success '>Update</button></td>
              </tr>
            )

            }
            {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    <td> <button className='btn btn-primary '>Favorite</button></td>
    <td>
    <button className='btn btn-danger '>Delete</button>
    </td>
    <td> <button className='btn btn-success '>Update</button></td>
    </tr> */}

          </tbody>
        </table>
      </div>


    </>
  )
}

export default Product