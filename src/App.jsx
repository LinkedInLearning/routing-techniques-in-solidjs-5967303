import {A} from "@solidjs/router"

function App() {
  return <>
  <p>
   <A href="/" activeClass="active-links" end>Home</A> | 
    <A href="/products" activeClass="active-links">Products</A> | 
    <A href="/categories" activeClass="active-links">Categories</A> | 
    <A href="/contact" activeClass="active-links">Contact</A>
  </p>
    <h1>Welcome To StoreFront</h1>

    <p>
      For your best deals in clothing, jewelry and electronics
    </p>
  </>;
}

export default App;
