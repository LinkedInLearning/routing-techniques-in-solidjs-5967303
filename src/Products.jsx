import {A} from "@solidjs/router"

const Products = () => {

    return <>
      <p>
       <A href="/" activeClass="active-links" end>Home</A> | 
        <A href="/products" activeClass="active-links">Products</A> | 
        <A href="/categories" activeClass="active-links">Categories</A> | 
        <A href="/contact" activeClass="active-links">Contact</A>
      </p>
        <h1>Products</h1>

        <u>
            <li>Stainless Spoons</li>
            <li>MicrowaVE</li>
            <li>Sporty Sneakers</li>
        </u>
    </>
}

export default Products