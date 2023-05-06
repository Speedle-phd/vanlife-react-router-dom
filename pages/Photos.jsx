import React, { useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

const Photos = () => {
   const data = useOutletContext()
   const [modal, setModal] = useState(false)
   const [currentImg, setCurrentImg] = useState(false)
   const imgRef = useRef()

   const handleModal = (e) => {
      const { target: t } = e
      setCurrentImg(t.src)
      setModal(true)
      
      // imgRef.current.src = t.src
   }

   return (
      <PhotosWrapper>
         <img
            onClick={handleModal}
            style={{ height: 70, width: 70, cursor: "pointer" }}
            src={data?.imageUrl}
            alt=''
         />
         
            {modal && (
               <aside>
                  <img src={currentImg}/>
                  <FaTimes className="close-btn" onClick={() => setModal(false)} />
               </aside>
            )}
      </PhotosWrapper>
   )
}

export default Photos

const PhotosWrapper = styled.div`
   /* aside{
      width: 60vw;
   } */
   aside{
      position: fixed;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100vw;
      height: 100dvh;
      background-color: rgba(0,0,0,.6);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
         width: 100%;
         height: 100%;
         padding: 5rem;
         object-fit: contain;
      }
      .close-btn{
         position: fixed;
         top: 3rem;
         right: 3rem;
         color: white;
         font-size: 3rem;
         cursor: pointer;
      }

      
   }
`
