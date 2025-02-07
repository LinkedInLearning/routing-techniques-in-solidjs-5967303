import {A} from "@solidjs/router"

const Categories = () => {

    return <>
    <p>
       <A href="/" activeClass="active-links" end>Home</A> | 
        <A href="/products" activeClass="active-links">Products</A> | 
        <A href="/categories" activeClass="active-links">Categories</A> | 
        <A href="/contact" activeClass="active-links">Contact</A>
      </p>
        <h1>Categories</h1>

        <u>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Home Appliances</li>
        </u>
    </>
}

export default Categories