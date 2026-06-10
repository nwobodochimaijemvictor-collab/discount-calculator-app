let formEl = document.querySelector(".formEl");
let errorMesg = document.querySelector(".errorMesg");

formEl.addEventListener("submit", function(e){
    e.preventDefault();

    let amount = document.querySelector("#amount").value.trim();

    if(amount === ""){
        errorMesg.style.color = "red";
        errorMesg.textContent = " Please enter an amount";
        return;
    }

    let numericAmount = Number(amount);

    if(isNaN(numericAmount)){
        errorMesg.style.color = "red";
        errorMesg.textContent = " Invalid number";
        return;
    }

    applyDiscount(numericAmount);
});

function applyDiscount(amount){

    let discount = 0;

    if(amount >= 1000){
        discount = amount * 0.10;

        let finalPrice = amount - discount;

        errorMesg.style.color = "green";
        errorMesg.textContent =
        ` 10% Discount Applied!

        Original: ₦${amount}
        | Discount: ₦${discount}
        | Final Price: ₦${finalPrice}`;
    }

    else if(amount >= 500){
        discount = amount * 0.05;

        let finalPrice = amount - discount;

        errorMesg.style.color = "green";
        errorMesg.textContent =
        ` 5% Discount Applied!
        Original: ₦${amount}
        | Discount: ₦${discount}
        | Final Price: ₦${finalPrice}`;
    }

    else{
        errorMesg.style.color = "brown";
        errorMesg.textContent =
        ` No discount available. Amount to pay: ₦${amount}`;
    }
}