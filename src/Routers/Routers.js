
import { Home, About, Contact, Services, LogIn, SignOut, SignUp } from '../pages'

export  const publicRoute = [
    {path:"/", name: "Home", Component: Home},
    {path:"/home", name: "Home", Component: Home},
    {path:'/about', name: "About", Component: About},
    {path:"/contact", name: "Contact", Component: Contact},
    {path:"/services", name: "Services", Component: Services},
    {path:"/log-in", name: "Log In", Component: LogIn},
    {path:"/log-out", name: "Log Out", Component: SignOut},
    {path:"/sign-up", name: "Sign Up", Component: SignUp},
  ]