const CatsController = require("../controllers/cats.controller")

const routes = (app)=>{
    //Create 
    app.post('/api/v1/cats',CatsController.create)
    //console.log('post')
    //Read all
    app.get('/api/v1/cats',CatsController.getAll)
    //console.log('read all')
    //Read one
    app.get('/api/v1/cats/:id',CatsController.getOne)
    //console.log('get one')
    //Update caption
    app.put('/api/v1/cats/:id',CatsController.update)
    //console.log('update')
    //Destroy
    app.delete('/api/v1/cats/:id',CatsController.delete)

}

module.exports = routes