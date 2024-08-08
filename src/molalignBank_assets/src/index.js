import {molalignBank} from "../../declarations/molalignBank";

window.addEventListener("load",async()=>{
    update() 
});


document.querySelector("form").addEventListener("submit",async(e)=>{
  e.preventDefault();


  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);


  if(document.getElementById("input-amount").value.length){
     await molalignBank.deposite(inputAmount); 
  }

  if(document.getElementById("withdrawal-amount").value.length){
     await molalignBank.withDraw(withdrawalAmount);
  }

  await molalignBank.compondInterst()
   update()



});

const update =async()=>{
const currentAmount = await molalignBank.currentBalnce();  
  document.getElementById("value").innerText=currentAmount;
}