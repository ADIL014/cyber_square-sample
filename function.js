
//function invocation
function name()
{ 
    console.log('hello john')
}
name()

//function add
function sum(a,b)
{
    return a+b;
}
let result= sum(10,5);
console.log(result);

//function parameters
 function greet (name)
 {
    console.log(`Hello, ${name}`);
 }
 greet('ADIL');

 //loacl scope
  function myfunction()
  {
    const localvar='Hello  Adil';
    console.log(localvar);
  }
  myfunction();
  
  //global scop


  const globalvar='hello world';
  function functions()
  {
    console.log(globalvar);
  }
  functions();
  console.log(globalvar);
  
  //scop of variables

  function scope()
  {
    user='baabtra';
    console.log('inside the block:' + user);
if (true){
     age=10;
     console.log('userinside block: '+ user);
     console.log('age insid block:'+ age);
}
     console.log('age inside: '+ age);

  }
  scope();
  console.log('user outside block:'+ user);
  console.log('age outside block:' + age);
  