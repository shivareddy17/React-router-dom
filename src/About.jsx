import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
function About(){


return(<>
<h3>This is About Compnent</h3>
<button><Link to={"order"}>order</Link></button> <br />
<button><Link to={"profile"}>profile</Link></button>


<h3>This is sub routing</h3>
<Outlet/>
</>)
}

export function Profile(){
    return(<>
    <h3>This is your sub Profile</h3>
    </>)
}

export  function Order(){
    return(<>
    <h3>This is your orders</h3>
    </>)
}
export default About