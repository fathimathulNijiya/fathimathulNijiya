/*
const promise=require('promise')

function getname(){
    return  new promise((resolve,reject)=>{
      setTimeout(() => {
         resolve('Crossroads')        
       },3000);
  })
}
function getmobile(){
    return new promise((resolve,reject)=>{
      setTimeout(() => {
         resolve('12345')        
       },2000);
  })
}
 getname().then((uname)=>{
   console.log(uname)
   return getmobile()
}).then((num)=>console.log(num)
)
*/
//for the abv pgm it require total 5 second to output 
//to grt both fn output in same time we use below method 'all' 

/*const promise=require('promise')

function getname(){
    return  new promise((resolve,reject)=>{
      setTimeout(() => {
         resolve('Crossroads')        
       },3000);
  })
}
function getmobile(){
    return new promise((resolve,reject)=>{
      setTimeout(() => {
         resolve('12345')        
       },2000);
  })
}
promise.all([getname(),getmobile()]).then((result)=>
console.log(result)
)*/


//we get output as array of all functionresult

// ** promise has 3 state
 /*1. pending
 2.fulfill
 3. rejected
 nodejs is  usually asynch type .when Callback fn came it doesnot wait to complete it,
 it moves to next code aftr calling Callback.it is asynch..
 but  in some case we require the fn to be complete for next code execution
 Eg: below
 */ 
 const promise=require('promise')

 function getname(){
     return  new promise((resolve,reject)=>{
       setTimeout(() => {
          resolve('Crossroads')        
        },3000);
   })
 }
 function getmobile(){
     return new promise((resolve,reject)=>{
       setTimeout(() => {
          resolve('12345')        
        },2000);
   })
 }/*
 function getuser(){
   let name= getname()
   console.log(name)
 }*/
 getuser()
 //while working this we get o/p as pending 
 //bcoz getname fn require 3 sec to complete before that console will output it
 // for that we use 'await'.so we have to dec fn as asynch as belw

  async function getuser(){
  let name= await getname()
  console.log(name)
  let mobile=await getmobile()
  console.log(mobile)
}