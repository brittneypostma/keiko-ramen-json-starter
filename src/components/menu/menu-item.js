import React from 'react'
import { Link } from "gatsby"
import cart from "../../images/cart.png"

const itemWrapper = `rounded-sm bg-white shadow-inset sm:hover:shadow-none flex justify-between items-center pl-5 gap-5 w-full transition-transform ease-linear duration-75 transform sm:hover:scale-105 sm:hover:bg-orange text-black sm:hover:text-white`

const textWrapper = `w-full px-2 py-5 grid justify-between items-center md:flex`

const cartLink = `rounded-sm bg-orange self-stretch flex flex-col items-center justify-center p-5`

const cartText = `text-white text-sm md:text-lg text-heading whitespace-no-wrap`

const MenuItem = ({ name, desc, price }) => {
  return (
    <div className={itemWrapper}>
      <div className={textWrapper}>
        <h4 className="text-2xl whitespace-no-wrap md:whitespace-pre-wrap md:flex-grow w-3/12">{name}</h4>
        <p className="font-body md:mx-5">{desc}</p>
        <h4 className="text-2xl">${price}</h4>
      </div>

      <Link to="/cart" className={cartLink}>
        <img src={cart} alt="shopping cart" />
        <p className={cartText}>
          ADD TO CART
            </p>
      </Link>
    </div>
  )
}

export default MenuItem
