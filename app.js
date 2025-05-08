
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];

 function submit() {
      let incomeAmount = document.getElementById("incomeAmount").value;
     let incomeDescription = document.getElementById("incomeDescription").value;
     let incomeCategory = document.getElementById("incomeCategory").value;
          let incomeDate = document.getElementById("incomeDate").value;



if(incomeAmount  && incomeDescription && incomeCategory && incomeDate){

    
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    arr1.push(incomeAmount);
    arr2.push(incomeDescription);
    arr3.push(incomeCategory);
    arr4.push(incomeDate);
    
    localStorage.setItem("incomeAmount", JSON.stringify(arr1));
    localStorage.setItem("incomeDescription", JSON.stringify(arr2));
    localStorage.setItem("incomeCategory", JSON.stringify(arr3));
    localStorage.setItem("incomeDate", JSON.stringify(arr4));
    
    
    window.location.reload();
}else{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill this field!'
      });
}

}


let save1 = localStorage.getItem("incomeAmount");
let save2 = localStorage.getItem("incomeDescription");
let save3 = localStorage.getItem("incomeCategory");
let save4 = localStorage.getItem("incomeDate");

 if (save1 && save2 && save3 && save4)  {
    arr1 = JSON.parse(save1);
    arr2 = JSON.parse(save2);
    arr3 = JSON.parse(save3);
    arr4 = JSON.parse(save4);
  } else {
    console.log("No saved data found.");
  }




 let arr5 = [];
 let arr6 = [];
 let arr7 = [];
 let arr8 = [];

  function expanceSubmit(){

 let expenseAmount = document.getElementById("expenseAmount").value;
 let expenseDescription =document.getElementById("expenseDescription").value;
 let expenseCategory =document.getElementById("expenseCategory").value;
 let expenseDate = document.getElementById("expenseDate").value;



if(expenseAmount && expenseDescription && expenseCategory &&expenseDate){


    arr5.push(expenseAmount);
    arr6.push(expenseDescription);
    arr7.push(expenseCategory);
    arr8.push(expenseDate);
    
    
    
    localStorage.setItem("expenseAmount", JSON.stringify(arr5));
    localStorage.setItem("expenseDescription", JSON.stringify(arr6));
    localStorage.setItem("expenseCategory", JSON.stringify(arr7));
    localStorage.setItem("expenseDate", JSON.stringify(arr8));
    
    window.location.reload();
    
}else{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill this field!'
      });
}
    

}



let save5 = localStorage.getItem("expenseAmount");
let save6 = localStorage.getItem("expenseDescription");
let save7 = localStorage.getItem("expenseCategory");
let save8 = localStorage.getItem("expenseDate");

 if (save5 && save6 && save7 && save8) {
    arr5 = JSON.parse(save5);
    arr6 = JSON.parse(save6);
    arr7 = JSON.parse(save7);
    arr8 = JSON.parse(save8);
  } 




 function viewIncome(){
    window.location.href = "income.html";


 }


 function viewexpance(){
    window.location.href = "expance.html";


 }




let arrIncome =[]


let amount =document.getElementById("amount")

let income = JSON.parse(localStorage.getItem("incomeAmount"));

if(income){

    for(var i = 0 ;i< income.length ;i++){
        
        arrIncome.push(Number(income[i]))
        
    }
    
    
    
}
    
    let total =0 ;
    for (let i = 0; i < arrIncome.length; i++) {
        total += arrIncome[i];
    }
    
    amount.innerHTML =`<p class="income-bg" id="amount">Rs : ${total}</p>`
    
    
    
    
    let arrExpansive = []
    
    let expense =document.getElementById("expense")
    
    let expance = JSON.parse(localStorage.getItem("expenseAmount"));
    
    if(expance){
    for(var i = 0 ;i< expance.length ;i++){

        arrExpansive.push(Number(expance[i]))
        
    }
}
    let total2 =0 ;
    for (let i = 0; i < arrExpansive.length; i++) {
        total2 += arrExpansive[i];
    }
    
    
    
    
    expense.innerHTML =`<p class="expense-bg" id="expense">Rs : ${total2}</p>`
    
    
    
    
    let balanceAmount =document.getElementById("balanceAmount")
    
    
    
    let grandTotal = total - total2
    
    
    balanceAmount.innerHTML=`<div class="balance-amount" id="balanceAmount">Rs : ${grandTotal}</div>`
    
    
    
    
    