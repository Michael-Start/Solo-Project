import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import  CardGroup  from 'react-bootstrap/CardGroup'
import NavBar from 'react-bootstrap/Navbar'

const Create = () => {
    const [ caption, setCaption] = useState('')
    const [picture, setPicture] = useState('')
    const[errors, setErrors] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
        
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
        .then(res=>{
            setPicture(res.data[0].url)
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    },[0])
    

    const getCat = (e)=>{
        e.preventDefault();
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
        .then(res=>{
            setPicture(res.data[0].url)
            console.log(res.data)
            console.log(res.data[0].url)
        })
        .catch(err=>console.log(err))
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/cats',{
            picture,
            caption
        })
        .then(res =>{
            console.log(res)
            navigate('/list')
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
    <div className='App'>
        <NavBar bg= 'primary' variant ='light'>
        <Container>
            <NavBar.Brand className='NavBar text-white'>Find a Cute Kitty!</NavBar.Brand>
            <Link to = '/list' className='text-white'>All the Saved Kitties!</Link>
        </Container>
        </NavBar>
        <Container className='bg-success d-inline-flex justify-content-center'>
        <Card style = {{width:'18rem'}} className= 'text-center p2 bg-primary card'>
        <div>
            <Image className = 'img-fluid' src= {picture} alt='A heckin floofer'></Image>
        </div>
    <Button onClick= {getCat} variant = "primary">Get a Cat!</Button>
    <div>
        <form onSubmit = {onSubmitHandler}>
            <Form.Group className = 'mb-3' controlId ='formBasicEmail'>
                <Form.Label><h4>Add a Caption:</h4> </Form.Label>
                {errors.map((err,index)=><p key = {index}>{err}</p>)}
                <input type="hidden" value = {picture} />
                <input type = 'text' onChange={(e)=> setCaption(e.target.value)}/>
                </Form.Group>
        <div>
            <Form.Text muted>
            *8 characters required
            </Form.Text>
        </div>
        <div>
            <Button variant ='primary' type = 'submit'>Save This Kitty!</Button>
        </div>
        </form>
        </div>
        </Card>
        </Container>
    </div>
  )
}

export default Create