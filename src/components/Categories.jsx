import React from 'react'
import { categories } from "../data"
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='categories'>
    {
        categories.map((item)=>(
            <CategoryItem
                img={item.img}
                title={item.title}
                category={item.category}
                key={item.id}

            />

        ))

    }

    </div>
    
  )
}

export default Categories