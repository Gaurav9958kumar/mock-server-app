const url="https://todo-app-j1uo.onrender.com/signup"


window.onload=()=>{
 getData();
}

 async function getData(){
    let res=await fetch(`${url}`)
       res=await res.json()
    console.log(res)
   
 }

 async function signup(){
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    let obj={
      email:email,
      status:true,
      mobile:mobile,
      password:password,
      id:Math.random()
    }
    let res=await fetch(url,{
      method: "POST",
      body:JSON.stringify(obj),
      headers:{"Content-Type":"application/json",},
  });
  getData();
  alert("signup successful")
  
  }