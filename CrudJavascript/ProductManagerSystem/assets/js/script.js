let title = document.getElementById("title");
let Price = document.getElementById("Price");
let taxes = document.getElementById("taxes");
let Ads = document.getElementById("Ads");
let Discount = document.getElementById("Discount");
let total = document.getElementById("total");
let Count = document.getElementById("Count");
let Category = document.getElementById("Category");
let submit = document.getElementById("submit");

// console.log(title,price,taxes,ads,Discount,total,count,Category,submit);
// Get Total
function getTotal(){
    if(Price.value != ""){
        let result = (+Price.value + +taxes.value + +Ads.value)
            - +Discount.value;
        total.innerHTML = result;
        total.style.background = " #27ae60 ";
    }else{
        total.innerHTML = "";
        total.style.background = "#c0392b";
    }
}

    
/* Create Product &
 Save Localstorage */

let DataProduct;
if(localStorage.product != null){
    DataProduct = JSON.parse(localStorage.product)
}else{
    DataProduct = [];
}


submit.onclick = function(){
    let NewProduct = {
        title:title.value,
        Price:Price.value,
        taxes:taxes.value,
        Ads:Ads.value,
        Discount:Discount.value,
        total:total.innerHTML,
        Count:Count.value,
        Category:Category.value,
    }
    DataProduct.push(NewProduct);
    localStorage.setItem("product",JSON.stringify(DataProduct))
    console.log(DataProduct)
    ClearData()
    ShowData()
}





// Clear Inputs

function ClearData(){
    title.value='';
    Price.value='';
    taxes.value='';
    Ads.value='';
    Discount.value='';
    total.innerHTML='';
    Count.value='';
    Category.value='';

}
// Read

function ShowData(){
    let table = '';
    for(let i = 0; i < DataProduct.length;i++){
        table += `
        <td>${i}</td>
        <td>${DataProduct[i].title}</td>
        <td>${DataProduct[i].Price}</td>
        <td>${DataProduct[i].taxes}</td>
        <td>${DataProduct[i].Ads}</td>
        <td>${DataProduct[i].Discount}</td>
        <td>${DataProduct[i].total}</td>
        <td>${DataProduct[i].Category}</td>
        <td><button id="update">Update</button></td>
        <td><button onclick="DeleteData(${i})" id="delet">Delete</button></td>
        `
    }
    document.getElementById("tbody").innerHTML = table;
} 
ShowData()


// Delete
function DeleteData(i){
    DataProduct.splice(i,1);
    localStorage.product = JSON.stringify(DataProduct);
    ShowData()
}



// Count


// Update

// Search

// Clean Data
