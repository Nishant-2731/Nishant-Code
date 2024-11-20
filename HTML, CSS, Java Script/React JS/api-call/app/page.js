"use client"
import axios from 'axios'
import React, {useEffect, useState} from 'react'

const page = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getImages()
  }, [])
  
  const getImages = async ()=>{
    try
    {
      const res = await axios.get("https://picsum.photos/v2/list");
      setImages(res.data);
      console.log(res.data);
    }
    catch(err)
    {
      console.log("Error");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-blue-700 text-white font-bold'>Get Images</button>
      <div className='p-10'>
        {Images.map((elem, i)=>{
          return <img 
          key= {i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-10 rounded-lg inline-block'
          />
        })}
      </div>
    </div>
  )
}

export default page