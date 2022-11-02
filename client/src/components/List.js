import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

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
        <div className='list'>
        <Card style = {{width:'18rem'}} className= 'text-center'>
        {cats.map((item,index)=>(
            <div key= {index}><Image className='img-fluid' src={item.picture} alt = 'A floofer'></Image> 
            <p>{item.caption}</p>
            <Link to = {`/detail/${item._id}`}>Update Kitty</Link>
            </div>
        ))}
        </Card>
        <div className='link'>
        <Link to = '/'>Get another cat</Link>
        </div>
        </div>
    </div>
  )
}

export default List