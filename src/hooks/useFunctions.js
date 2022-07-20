// import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const useFunctions = () => {

    const [data, setData] = useState(localStorage.getItem('data') || {
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    const handleClose = () =>{
        localStorage.removeItem('data')
        navigate('/')
    }

    const handleChange = (e) =>{

        console.log(e.target.value, 'este es el evento');
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
     }

     const handleSubmit = (e) =>{
        e.preventDefault()
    
        if(Object.values(data).includes('')){
            alert('Los campos son requeridos')
            return
        }else{
            //guardar en el localstorage
            localStorage.setItem('data', JSON.stringify(data))
        
            navigate('home')
        }
        
     }
      

      return {handleClose,handleChange,data,handleSubmit}
}

export default useFunctions