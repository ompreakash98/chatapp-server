// const express=require('express');
// const jwt=require('jsonwebtoken');
// const app=express()

// const mysecretKey='AKKSJJDKKFJJFKFKGKKGJJDJDKDDLLSKSJ'

// app.use(express.json());

// const users = [
//     { id: 1, username: 'user1', password: 'password1' },
//     { id: 2, username: 'user2', password: 'password2' }
//   ];


//   //login api

//   app.post('/login',(req,res)=>{
   
//     const {istrue}=req.body;
//       if(istrue){
//         const token =jwt.sign({},mysecretKey,{expiresIn:'1m'})
//         res.json({token})
//       }else{
//         res.status(401).json({massage:"invalid user name and password "})
//       }    
//   })

//   app.get('/protected',authenticateoken,(req,res)=>{
//     res.json({message:"protected roote accessed sucessfull"})
//   })

//   function authenticateoken(req,res,next){
//     const token=req.headers['authorization'];
//     if(token==null) return res.sendStatus(401);
//     jwt.verify(token,mysecretKey,(err,user)=>{
//         if(err) return res.sendStatus(403);
//         req.user=user;
//         next();

//     })

//   }

//   app.listen(3434,()=>{
//     console.log('server is runing on ')
//   })


