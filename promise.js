/*function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true
        console.log("first num is 0")
    }
        else
    
    callback(num1+num2,err)
    
}
function multi(num1,num2,callback)
{
    callback(num1*num2)
}
function div(num1,num2,callback){
    callback(num1/num2)
}

add (10,20,(sum,err)=>{
    console.log(sum)
       multi(sum,sum,(product)=>{
         console.log(product)
         div(product,10,(result)=>{
            console.log(result)
       })
    })
})  */
//this is call back hell
//inorder to avoid confusion in big project with large condition and coding we use promise
//same prgm usng promise

//const { resolve, reject } = require('promise')
const promise=require('promise')

function add(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("first number is zero")
        } 
         resolve(num1+num2)  
    })
}
function multi(num1,num2){
    return new promise((resolve,reject)=>{
     if (num1==0){
         reject("first num is zero")
        }
        resolve(num1*num2)
   })
}
function div(num1,num2){
    return new promise((resolve,reject)=>{
     if (num1==0){
         reject("first num is zero")
        }
        resolve(num1/num2)
   })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return multi(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>console.log(err))
// this is called chaining