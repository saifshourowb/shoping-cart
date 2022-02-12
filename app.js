function updateProductNumber(product, price , isIncreasing){
    const productInput = document.getElementById( product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
         productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update  total 
    const productTotal= document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

    // calculate total 
    calculatTotal();
}

function getInputValue(product){
    const productInput = document.getElementById( product +"-number");
    const  productNumber =parseInt(productInput.value);
    return productNumber;
}

function calculatTotal(){
    const PhoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case")* 59 ;
    const subTotal = PhoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // update on the html 
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}


// 1 number tar function call koranor phone increse and decrise event 
// eta plus button er jonno 
document.getElementById("phone-plus").addEventListener
("click", function(){
    updateProductNumber("phone" , 1219,  true);
});

// ar eta minus button er jonno 
document.getElementById("phone-minus").addEventListener
("click", function(){
updateProductNumber("phone", 1219, false);
});

// 2 number tar function call kora handel  incrise dicrise events
// eta plus button er jonno 
document.getElementById("case-plus").addEventListener
("click",function(){
    updateProductNumber("case", 59 , true);
});

// ar eta minus button er jonno 
document.getElementById("case-minus").addEventListener
("click", function(){
    updateProductNumber("case", 59 , false); 
});