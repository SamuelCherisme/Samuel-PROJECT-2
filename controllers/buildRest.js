const express = require('express')
const router = express.Router();
const List = require('../models/list');
const { update } = require('../models/list');


//Index

router.get('/', (req, res)=> {
  List.find({}, (error, allList)=> {
    res.render('list/Index', {
      list: allList
    })
  })
})




//New

router.get('/new', (req, res)=> {
  res.render('list/New')
})



//Delete

router.delete('/:id', (req, res)=> {
  List.findByIdAndDelete(req.params.id,(error, list)=> {
    res.redirect('/list')
  })
})




//Update

router.put('/:id', (req, res)=> {
  if(req.body.isDone ==='on'){
    req.body.isDone = true;
  } else{
    req.body.isDone = false;
  }


List.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new: true},
  (err, updateModel)=> {
    res.redirect('/list')
  }
)

})

//Create

router.post('/', (req, res)=> {
  if(req.body.isDone ==='on'){
    req.body.isDone = true;
  } else{
    req.body.isDone = false;
  }

List.create(req.body,(error, createList)=> {
  res.send(createList)
})

})


//Edit

router.get('/:id/edit', (req, res)=> {
  List.findById(req.params.id, (error, foundList)=>{
      res.render('list/Edit', {
          list: foundList
      })
  })
})

//Show
router.get('/:id', (req, res)=> {
  List.findById(req.params.id, (error, foundList) => {
    res.render('list/Show', {
      list: foundList
    })
  })
})


module.exports = router;