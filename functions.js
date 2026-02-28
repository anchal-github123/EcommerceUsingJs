// API URL
let url="https://fakestoreapi.com/products";

const productContainer=document.querySelector(".product_container");
const navList=document.querySelector(".nav_list");


navList.addEventListener("click",handelNavButton);

// handeling navbar items/buttons........................................
async function handelNavButton(e){

if(e.target.tagName=="UL") return;

// promise handel by async await
try{
    let res=await fetch(url);
    let data=await res.json();

}catch(err){
    console.log("something went wrong", err)

}
//Example  promise handel by .then() .catch()---------------------------------------------------------------------
// fetch(url)
// .then((res)=>res.json())
// .then((data)=> console.log(data))
// .catch((err)=>console.log(err))
// =======================================================================================================================



let category=e.target.innerText;
console.log(category)


}