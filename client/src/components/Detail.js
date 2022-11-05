import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

const Detail = () => {
    const[cat, setCat] = useState({});
    const {id} = useParams();
    const[errors, setErrors] = useState([])
    const [caption, setCaption] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/cats/${id}`)
        .then(res=>{
            setCat(res.data)
            setCaption(res.data.caption)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/v1/cats/${id}`,{
            caption
        })
        .then(res=>{
            console.log(res);
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
    },[])
    }

    const handleDelete = (_id) =>{
        axios.delete(`http://localhost:8000/api/v1/cats/${id}`)
        .then((res)=>{
            console.log(res)
            navigate('/list')
        })
        .catch(err=> console.log(err))
    }

  return (
    <div>
        <NavBar bg= 'primary' variant ='light'>
        <Container>
        <NavBar.Brand className='NavBar text-white'>Edit Picture</NavBar.Brand>
        <Link to = '/list' className='text-white'>Back to my Kitties!</Link>
        </Container>
        </NavBar>
        <Container className='bg-success d-inline-flex justify-content-center'>
        <div className='list'>
        <Card style ={{width:'18rem'}} className= 'text-center p2 bg-primary card'>
        <Image src = {cat.picture}></Image>
        <form onSubmit={handleUpdate}>
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
            <label>Update Caption</label>
            <input type="text-area" value={caption} onChange= {(e)=> setCaption(e.target.value)} />
            <p>*required</p>
            <Button type = 'submit'>Update Caption</Button>
        </form>
        <Button onClick = {handleDelete}>Delete Picture</Button>
        </Card>
        </div>
        </Container>
    </div>
  )
}

export default Detail