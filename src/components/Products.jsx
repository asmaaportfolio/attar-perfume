import React from 'react'
import productsData from '../data/productsData'
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className=' pb-16 pl-22 pr-22 '>
        <h1 className="text-3xl font-bold mb-24 text-center">ارقي العطور</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData.map((item) =>(

          <ProductCard key={item.id} product={item}/>
            ))}
        </div>
      
    </div>
  )
}

export default Products
