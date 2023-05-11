import { redirect } from "react-router-dom"

export const wait = (time) => {
   return new Promise(res => {
      setTimeout(res, time)
   })
}

export const isLogged = async() => {
   const isLoggedIn = true

   if(!isLoggedIn) {
      console.log(isLoggedIn)
      return redirect("/login?message=you need to log in first")      
   }

}