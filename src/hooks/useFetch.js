// import {useState} from 'react'

// const useFetch = () => {

//     const [images, setImages] = useState([])

  
//     const API_KEY = `client_id=e5y8jIGj9QYvcG2_nmJEz1Zr_8hbzjB6IylJnef5kHY`


//     const getData = async () => {
//         try{
//           const res = await fetch(`https://api.unsplash.com/search/photos?page=10&query=office&&${API_KEY}`)
//           const data = await res.json()
  
//           setImages(data.results)

//           console.log(data.results);
//           console.log(images, 'images')
//         }
//         catch(error){
//           console.log(error);
//         }
//     }
//     return {getData}
// }

// export default useFetch