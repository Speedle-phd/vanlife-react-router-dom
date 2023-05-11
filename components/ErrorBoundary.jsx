import React from "react"

export default class ErrorBoundary extends React.Component{
   #state
   constructor(props){
      super(props)
      console.log(props)
      this.#state = {hasError: false}
   }
   static getDerivedStateFromError(error){
      // Update state so the next render will show the fallback UI.
      return {hasError: true}
   }
   componentDidCatch(error, errorInfo){
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo)
   }

   render() {
      if (this.#state.hasError) {
         return this.props.fallback
      }
      return this.props.children
   }
}