import axios from "axios"
import { defer, redirect, useParams } from "react-router-dom"
import { getLocalStorage } from "../context/AuthContextProvider"
import { wait } from "../utils/utils"
import {app} from '../firebase'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore/lite'

const db = getFirestore(app)

const vansCollection = collection(db, 'vans')


export const VansLoader = async () => {
   // let url = '/api/vans'
   try {
      const querySnapshot = await getDocs(vansCollection)
      const dataArr = querySnapshot.docs.map(doc => {
         const documentId = doc.id
         return {...doc.data(), documentId}
      })
      // const dataPromise = axios(url)
      return defer({data: dataArr})
   } catch (error) {
      console.log(error)
      throw {
         message: "An Error occurred. Please try again.",
         status: 500, 
      }
   }
}

export const SingleVanLoader = async({params}) => {
   const {id} = params
   // const url = `/api/vans/${id}`

   try {

      const q = query(vansCollection, where("id", "==", id))
      const querySnapshot = await getDocs(q)
      const van = querySnapshot.docs[0].data()

      // const docRef = doc(db, 'vans', id)
      // console.log(docRef)
      // const docSnap = await getDoc(docRef)
      // console.log(docSnap.data())
      // doesnt work because the document Id isnt the same as the van Ids. I added an id seperately into the document.
      

      // const {data} = await axios(url)
      // console.log(data)
      return defer({dataPromise: van})
   } catch (error) {
      console.error(error)
      throw {
         message: `There isn't a van with the id ${id}`,
         status: 404,
      }
   }
}

export const UserVansLoader = async ({request}) => {
   console.log(request)
   let url = '/api/host/vans'
   try {


      const q = query(vansCollection, where('hostId', '==', "123"))
      const querySnapshot = await getDocs(q)
      const vansData = querySnapshot.docs.map(doc => {
         return {...doc.data()}
      })
      
      const {data: {vans}} = await axios(url)
      console.log(vansData, vans)
      return defer({data: vansData})
   } catch (error) {
      console.log(error)
      throw {
         message: 'An Error occurred. Please try again.',
         status: 500,
      }
   }
}

export const SingleUserVanLoader = async ({params}) => {
   const {id} = params
   const url = `/api/host/vans/${id}`

   try {

      const q = query(vansCollection, where('id', '==', id))
      const querySnapshot = await getDocs(q)
      const van = querySnapshot.docs[0].data()


      // const data = await axios(url)
      if(!van) throw { message: `There isn't a van with the id ${id}`, status: 404 }

      return defer({data: van})
   } catch (error) {
      error.status ??= 500
      error.message &&= "An Error occurred. Please try again."
      throw {
         message: error.message,
         status: error.status,
      }
   }
}


export const createUser = async ({ request }) => {

   const data = await request.formData()

   const newUser = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
   }
   let url = "/api/signup"
   try {
      const res = await axios.post(url, newUser, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      return res
   } catch (error) {
      console.log(error)
      throw new Error()
   }
}
export const getUser = async ({ request }) => {
   const data = await request.formData()
   console.log(data.get("password"))
   const user = {
      email: data.get('email'),
      password: data.get('password')
   }
   let url = "/api/login"
   try {
      const res = await axios.post(url, user, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
      // console.log(res.data)
      // localStorage.setItem(
      //    'react-router-dom-tut-auth',
      //    JSON.stringify(res)
      // )
      return res
      
   } catch (error) {
      console.log(error)
      throw{message: `No username found or password doesn't match`, status: 401}
   }


}