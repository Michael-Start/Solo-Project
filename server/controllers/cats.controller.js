const Cats = require('../models/cats.model');
const {request, response} = require('express');
const { findOneAndUpdate } = require('../models/cats.model');

const CatsController = {
    // Create description
    create:(req,res)=>{
        const{caption} =req.body;
        Cats.create({
            caption:caption
        })
        .then(cat=>res.json(cat))
        .catch(err=>res.status(400).json(err))
        console.log('caption')
    },
    
    //Read All
    getAll:(req,res)=>{
        Cats.find({})
        .then(cats=>{
            res.json(cats)
        })
        .catch(err=>res.status(400).json(err))
        
    },
    //Read One
    getOne:(req,res)=>{
        Cats.findOne({_id:req.params.id})
        .then(cat=>
            res.json(cat))
            .catch(err=>res.status(400).json(err))
        console.log('one')
    },
    //Update
    update:(req,res)=>{
        console.log('update')
        Cats/findOneAndUpdate({_id:req.params.id}, req.body,{new:true, runValidators:true})
        .then(updatedCaption =>res.json(updatedCaption))
        .catch(err=>res.status(400).json(err))
    },
    //Delete
    delete:(req,res)=>{
        Cats.deleteOne({_id:req.params.id})
        .then(deleteConfirmation=> res.json(deleteConfirmation))
        .catch(err=>res.json(err))
        console.log('delete')
    }

}

module.exports = CatsController