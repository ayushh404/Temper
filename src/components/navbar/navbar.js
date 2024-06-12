import Nav from "./nav/nav"
import { auth } from "@/lib/auth"

const Navbar = async() => {

    const session = await auth();

  return (
    <>
    <Nav session={session}/>
    </>
  )
}

export default Navbar