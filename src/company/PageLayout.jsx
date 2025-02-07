import {A} from "@solidjs/router"

const PageLayout = (props) => {

    return <>

        <div>
            <A href="/company" activeClass="active-links" end>Home</A> | 
<A href="/company/about" activeClass="active-links">About</A> | 
<A href="/company/services" activeClass="active-links">Categories</A> | 
<A href="/company/staff" activeClass="active-links">Staff</A>
        </div>

        <div>
            {props.children}
        </div>

        <div>
            MyCompany @copyright 2025
        </div>
    
    </>
}

export default PageLayout