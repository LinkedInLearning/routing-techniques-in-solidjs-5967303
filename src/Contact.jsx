import {A} from "@solidjs/router"

const Contact = () => {

    return <>
    <p>
       <A href="/" activeClass="active-links" end>Home</A> | 
        <A href="/products" activeClass="active-links">Products</A> | 
        <A href="/categories" activeClass="active-links">Categories</A> | 
        <A href="/contact" activeClass="active-links">Contact</A>
      </p>
        <h1>Contact Us</h1>

        <div>
            <form>
                <p>
                    <input type="email" placeholder="Enter Your Email" />
                </p>
                <p>
                    <textarea>Enter Your Message</textarea>
                </p>
            </form>
        </div>
    </>
}

export default Contact;