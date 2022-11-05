import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import  CardGroup  from 'react-bootstrap/CardGroup'
import NavBar from 'react-bootstrap/Navbar'

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
        <NavBar bg= 'primary' variant ='light' sticky='top'>
        <Container>
            <NavBar.Brand className='NavBar text-white'>All My Favorite Cats!</NavBar.Brand>
        <div className='link'>
            <Link to = '/' className='text-white'>Get another cat</Link>
        </div>
        </Container>
        </NavBar>
    <Container className= 'bg-success d-flex flex-row justify-content-center'>
        {/* <Row className='justify-content-md-center'> */}
        <CardGroup  className='card bg-info'>
        <div className="d-flex justify-content-center">
        {/* <div className='list'> */}
        <Card style = {{width:'18rem'}} className= 'text-center p2 bg-primary card' border='info'>
        {cats.map((item,index)=>(
            <div>
            <Card.Img key= {index} src={item.picture} alt = 'A floofer'  style = {{width:'15rem'}}/>
            <Card.Text>{item.caption}</Card.Text>
            <Link to = {`/detail/${item._id}`} className= 'text-white'>Update Kitty</Link>
            </div>
        ))}
        </Card>
        </div>
        {/* </div> */}
        </CardGroup>
        
            
            {/* </Row> */}

        </Container>

    </div>
  )
}

export default List