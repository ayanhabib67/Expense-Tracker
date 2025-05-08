let save1 = JSON.parse(localStorage.getItem("expenseAmount"));
let save2 = JSON.parse(localStorage.getItem("expenseCategory"));
let save3 = JSON.parse(localStorage.getItem("expenseDate"));
let save4 = JSON.parse(localStorage.getItem("expenseDescription"));



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
    
    







    function removeAllEncome(){


        localStorage.removeItem("expenseAmount")
        localStorage.removeItem("expenseCategory")
        localStorage.removeItem("expenseDate")
        localStorage.removeItem("expenseDescription")
        
        window.location.reload();
        
        
    }