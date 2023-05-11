import styled from 'styled-components'
import { Form, Link, useNavigation, Navigate, redirect, useActionData, useLocation, useNavigate } from 'react-router-dom'

import { useGlobalAuth } from '../context/AuthContextProvider'
import { useEffect, useRef } from 'react'

const Login = () => {
   const {setToken, token, setId} = useGlobalAuth()
   const { pathname: path, state } = useLocation()
   const actionData = useActionData()
   const asideRef = useRef(null)
   const navigate = useNavigate()
   // idle submitting loading
   const navigation = useNavigation()

   
   useEffect(() => {

      setToken(actionData?.data?.token)
      setId(actionData?.data?.id)
      const localStorageObject = {
         token: actionData?.data?.token,
         id: actionData?.data?.id
      }
      localStorage.setItem('react-router-dom-tut-auth', JSON.stringify(localStorageObject))
      if(actionData){
         navigate(state?.path ?? "/host", {replace: true}) // replacing in history
      }
   },[actionData])

   useEffect(() => {
      if(state?.message && asideRef.current) {
         setTimeout(() => {
            asideRef.current.className = 'message-box'
         },100)
         setTimeout(() => {
            asideRef.current.className = ""
         },5000)
      }
   },[state])

   return (

      <LoginWrapper>
         <aside ref={asideRef}>{state?.message}</aside>
         {/* {actionData?.data?.token && (
            <Navigate to="/host" replace/>
         )} */}
         <h2>{`${
            path === '/login' ? 'Log in to your' : 'Sign for a new'
         } account`}</h2>
         <Form
            method="POST"
            replace
            // action={path === '/login' ? '/login' : '/signup'}
         >
            <div className='input-container'>
               {path === '/signup' && (
                  <input
                     type='name'
                     required
                     name='name'
                     id='name'
                     placeholder='Full name'
                  />
               )}
               <input
                  type='email'
                  required
                  name='email'
                  id='email'
                  placeholder='Email address'
               />
               <input
                  type='password'
                  required
                  name='password'
                  id='password'
                  autoComplete='current-password'
                  placeholder='Password'
               />
            </div>
            <button type='submit' disabled={navigation.state === "submitting"}>
               {path === '/login' ? 'Log in' : 'Sign up'}
            </button>
         </Form>
         <div className='link-container'>
            {path === '/login' ? (
               <>
                  <p>Don't have an account?</p>
                  <Link to='/signup'>Create one now.</Link>
               </>
            ) : (
               <>
                  <p>Already have an account?</p>
                  <Link to='/login'>Login in now.</Link>
               </>
            )}
         </div>
      </LoginWrapper>
   )
}

export default Login

const LoginWrapper = styled.section`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   aside {
      position: absolute;
      top: 2rem;
      left: 50%;
      translate: -50% -10rem;
      background-color: rgba(0, 180, 100, 0.8);
      padding: 1rem 1.25rem;
      border-radius: 100vmin;
      color: white;
      transition: 750ms ease-in-out;
   }
   aside.message-box {
      translate: -50% 0;
   }
   .link-container {
      text-align: center;
      p {
         font-weight: 600;
         font-size: 1.2rem;
         margin-bottom: 1rem;
      }
      a {
         color: var(--brand);
         font-weight: 600;
         opacity: 0.7;
         transition: 0.25s ease;
         :hover,
         :focus-visible {
            opacity: 1;
         }
      }
   }
   form {
      width: clamp(300px, 50vw, 30rem);

      .input-container {
         display: flex;
         flex-direction: column;
         gap: 0.2rem;
         input {
            appearance: none;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            padding: 0.25rem 0.5rem;
         }
      }
      button[type='submit'] {
         appearance: none;
         outline: none;
         background-color: var(--brand);
         color: #fff;
         opacity: 0.7;
         padding: 0.5rem 0.75rem;
         border-radius: 3px;
         transition: 0.25s ease;
         margin-top: 1rem;
         width: 100%;
         cursor: pointer;
         :hover,
         :focus-visible {
            opacity: 1;
         }
      }
      button[type="submit"]:disabled{
         cursor: not-allowed !important;
      }
   }
`
