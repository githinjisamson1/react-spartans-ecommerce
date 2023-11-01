import React from 'react'
import Sidebar from './Sidebar'
import ProductList from './ProductList'
import "./productComponent.css"

const ProductComponent = ({products}) => {
  return (
    <div className="body">
    <Sidebar products={products}/>
    <ProductList products={products}/>
    </div>
  )
}

export default ProductComponent