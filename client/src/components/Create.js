import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const Create = () => {
    const [ caption, setCaption] = useState('')
    const [picture, setPicture] = useState('')
    const[errors, setErrors] = useState([])
    const navigate = useNavigate()

    const getCat = (e)=>{
        e.preventDefault();
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
        .then(res=>{
            setPicture(res.data[0].url)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/cats',{
            picture,
            caption
        })
        .catch(err=>{
            console.log(err)
            const errorResponse = err.response.data.errors;
            const errorArr=[];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

  return (
    <div>
        <h1>Find a Cute Kitty!</h1>
    <div class = "w-50 p-3, h-50 d-inline-block" >
        <Image class = 'img-fluid' src= {picture} alt='A heckin floofer'></Image>
    </div>
    <Button onClick= {getCat} variant = "primary"  >Get a Cat!</Button>
    <div>
        <Form.Label onSubmit={onSubmitHandler}>Add a Caption: </Form.Label>
            <Form.Control
            type= 'text-area'/>

    </div>
    <div>
        <Link to = '/list'>All the Saved Kitties!</Link>
    </div>
    </div>
  )
}

export default Create