;
let save1 = JSON.parse(localStorage.getItem("incomeAmount"));
let save2 = JSON.parse(localStorage.getItem("incomeCategory"));
let save3 = JSON.parse(localStorage.getItem("incomeDate"));
let save4 = JSON.parse(localStorage.getItem("incomeDescription"));




let income = document.getElementById("income")

if(save1){

    
    for (var i = 0; i < save1.length; i++) {
        
        
        income.innerHTML +=` <div class="income-entry">
        <p><strong>Amount:</strong> ${save1[i]}</p>
        <p><strong>Description:</strong> ${save4[i]}</p>
        <p><strong>Category:</strong> ${save2[i]}</p>
        <p><strong>Date:</strong> ${save3[i]}</p>
        <hr />
        </div>
        `
        }

}




function RemoveAllIncome(){


localStorage.removeItem("incomeAmount")
localStorage.removeItem("incomeCategory")
localStorage.removeItem("incomeDate")
localStorage.removeItem("incomeDescription")

window.location.reload();

}






