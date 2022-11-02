import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const List = () => {
    const[cats, setCats] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/cats')
        .then((res)=>{
            setCats(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div>
        <h1>All my Favorite Cats!</h1>
        {cats.map((item,index)=>(
            <div className='card' key= {index}><Image className='img-fluid' src={item.picture} alt = 'A floofer'></Image> 
            <p>{item.caption}</p>
            <Link to = {`/detail/${item._id}`}>Update Kitty</Link>
            </div>
        ))}
        <Link to = '/'>Get another cat</Link>

    </div>
  )
}

export default List