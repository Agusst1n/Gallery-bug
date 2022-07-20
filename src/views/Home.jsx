import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'

//Custom Hooks
import useFunctions from '../hooks/useFunctions'

import styles from './Home.module.css'
import Search from '../components/Search'
import Image from '../components/Image'

const Home = () => {

  const [images,setImages] = useState({});
  const [loading,setLoading] = useState(false)


  // const API_KEY = `client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY`


  const getData = async () => {
    try{
        setLoading(true)
        console.log(loading, 'inicio');
        const res = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await res.json()
  
        setImages(data.results)
        setLoading(false)
        console.log(loading, 'fin');

        console.log(data.results);
        console.log(images, 'images')
      }
      catch(error){
        console.log(error)
      }
  }


  let navigate = useNavigate()
  const {handleClose}= useFunctions() //customHook

  useEffect(()=>{

    if(!localStorage.getItem('data')){
      navigate('/')
      return
    }
    getData()




  },[])

  return (
    <div className={styles.home}>
      <Search/>
      <div className={styles.images}>
        {/* {
          images.map((image)=><Image/>)
        } */}
      </div>
      <button className={styles.close} onClick={handleClose}>Cerrar sesion</button>
    </div>
  )
}

export default Home