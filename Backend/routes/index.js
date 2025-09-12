var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path')
var productModel = require('../models/productModel');
var userModel = require('../models/userModel');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// here we are saying    to store the file in destination with filename this
// here that file includes the file size,name,type etc and cb here is callback function
// use to set the new name of file before sotring and req is the express req obj.
const storage = multer.diskStorage({
     destination: path.join(__dirname, '..', 'upload/images'),
    filename: (req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
// this upload(work as a middleware) we will use in routes to store the file
const upload = multer({storage:storage});

// .single means upload will only handle the file which have name="product" attribute
// and that req(this req we get from the multer.diskstorage) is holding the file 
router.use('/images',express.static('upload/images'));

router.post('/upload',upload.single('product'),(req,res)=>{
  // this res.json is passed to the .then method from where we call this api
   res.json({
      success:1,
      image_url: `http://localhost:${3000}/images/${req.file.filename}`
   })
});


router.post('/addproduct', async (req,res)=>{
  // it will return array of object
  let products = await productModel.find({}), id = 1;
  if (products.length > 0) {
    let product = products[products.length-1];
    id += product.id;
  }
  try {
    const product = new productModel({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    await product.save();
    res.json({
      success:true,
      name:req.body.name,
    })
  } catch(err) {
    res.status(500).send("Error saving document");
  }
});

router.post('/removeproduct',async (req,res)=> {
    await productModel.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
      success: true,
      name: req.body.name,
    })
})

router.get('/allproducts',async (req,res)=>{
  // .find always return array of object
   let products = await productModel.find({});
   res.json({
    success:true, 
    product: products,
   });
})

router.post('/signup',async (req,res)=>{
    let check = await userModel.findOne({email:req.body.email});
    if (check) {
      return res.status(400).json({success:false,errors:"existing user found with same email"});
    }
    let cart = {};
    for (let i = 0; i<300; i++) {
      cart[i] = 0;
    }
    const user = new userModel({
      name:req.body.username,
      email:req.body.email,
      password:req.body.password,
      cartData:cart,
    })
    await user.save();
    const data = {
        user: {
          id: user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

router.post('/login',async(req,res)=>{
  let user = await userModel.findOne({email:req.body.email});
  if (user) {
      const passcompare = req.body.password === user.password;
      if (passcompare) {
        const data = {
          user:{
            id:user.id
          }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
      }
      else {
          res.json({success:false,errors:"Wrong Password"});
      }
  }
  else {
      res.json({success:false,errors:"Wrong Email Id"});
  }
})

module.exports = router;
