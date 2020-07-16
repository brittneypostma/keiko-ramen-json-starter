import React from 'react'

const pStyles = `border-solid border-red border-2 text-red text-3xl flex items-center justify-center cursor-pointer w-10 h-10`
const numStyles = `w-10 h-10 font-heading text-2xl text-center text-white bg-red rounded-full mx-5`

const AddToCart = () => {
  return (
    <div className="grid md:flex justify-start md:items-center">
      <div className="flex justify-center">
        <p className={pStyles}>&#45;</p>
        <label htmlFor='number'>
          <input className={numStyles} type="number" id="number" value="1" min="1" max="10" /></label>
        <p className={pStyles}>&#43;</p>
      </div>
      <button className="border-2 mt-5 md:mt-0 md:ml-5 border-orange hover:border-solid hover:btn-hover">
        ADD TO CART
    </button>
    </div>
  )
}

export default AddToCart
