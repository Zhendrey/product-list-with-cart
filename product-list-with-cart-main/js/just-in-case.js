// let orderQty = 1;
// let totalQty;
// let clickCounter = 0;

// Array.from(addToCart).forEach((item, index)=>{ 

// //     // const addToOrderCheck = (id, qty, addedToOrder) =>{
// //     //     let _id = id;
// //     //     let _qty = qty;
// //     //     let _addedToOrder = addedToOrder;

// //     //     const methods = {
// //     //         getObj: ()=>{
// //     //             const obj = {
// //     //                 id: _id,
// //     //                 qty: _qty,
// //     //                 "addedToOrder": addedToOrder
// //     //             }
// //     //             return obj;
// //     //         },
// //     //         getId: ()=>{
// //     //             return _id
// //     //         },
// //     //         getQty: ()=>{
// //     //             return _qty
// //     //         },
// //     //         getAddedToOrder: ()=>{
// //     //             return _addedToOrder
// //     //         },
// //     //     }
// //     //     return methods;
// //     // }
//     function activateOrder(event) {
//         const targetElem = event.target.closest(".add-to-cart");
//         targetElem.classList.add("active");
//         orders.classList.add("active");
//         reminder.classList.add("active");
//         total.classList.add("active");
//         confirmOrder.classList.add("active");
//         emptyCart.classList.remove("active");
//         quantity[index].textContent = orderQty;
//             createOrder(
//                 optionTitle[index].textContent, 
//                 quantity[index].textContent, 
//                 jsonItems[index].price.toFixed(2),
//                 clickCounter,
//             );
//             // clickCounter++;
//             if(orderQty === 0){
//             item.classList.remove("active");
//             orders.classList.remove("active");
//             reminder.classList.remove("active");
//             total.classList.remove("active");
//             confirmOrder.classList.remove("active");
//             emptyCart.classList.add("active");
//             orderQty = 1;
//             quantity[index].textContent = orderQty;
//         }else{
//             
//         }
//     }
//     // if(clickCounter <= 2){
//         item.addEventListener("click", activateOrder)
    // }
    // clickCounter++;
    // minus[index].addEventListener("click", function(event) {
    //     orderQty--;
    //     quantity[index].textContent = orderQty;
    // })
    // plus[index].addEventListener("click", function(event) {
    //     orderQty++;
    //     quantity[index].textContent = orderQty;  
    //     // 
    // })
//     // const itemProps = [addToOrderCheck(index, orderQty, false).getObj()];
//     // return itemProps;
// })



// const optioinsCheck = Array.from(addToCart).map((item, index)=>{
//     const  addToOrderCheck = (id, qty, addedToOrder) =>{
//         let _id = id;
//         let _qty = qty;
//         let _addedToOrder = addedToOrder;

//         const methods = {
//             getObj: ()=>{
//                 const obj = {
//                     id: _id,
//                     qty: _qty,
//                     "addedToOrder": addedToOrder
//                 }
//                 return obj;
//             },
//             getId: ()=>{
//                 return _id
//             },
//             getQty: ()=>{
//                 return _qty
//             },
//             getAddedToOrder: ()=>{
//                 return _addedToOrder
//             },
//         }
//         return methods;
//     }
//     return addToOrderCheck(index, orderQty, false).getObj();
// })

    // function activateOrder(event) {
    //     item.classList.add("active");
    //     orders.classList.add("active");
    //     reminder.classList.add("active");
    //     total.classList.add("active");
    //     confirmOrder.classList.add("active");
    //     emptyCart.classList.remove("active");
    //     quantity[index].textContent = orderQty;
    //         createOrder(
    //             optionTitle[index].textContent, 
    //             quantity[index].textContent, 
    //             jsonItems[index].price.toFixed(2),
    //         );
    //         if(orderQty === 0){
    //         item.classList.remove("active");
    //         orders.classList.remove("active");
    //         reminder.classList.remove("active");
    //         total.classList.remove("active");
    //         confirmOrder.classList.remove("active");
    //         emptyCart.classList.add("active");
    //         orderQty = 1;
    //         quantity[index].textContent = orderQty;
    //     }else{
    //         
    //     }
    // }
    // item.addEventListener("click", activateOrder)
    // minus[index].addEventListener("click", function(event) {
    //     orderQty--;
    //     // quantity[index].textContent = orderQty;
    // })
    // plus[index].addEventListener("click", function(event) {
    //     orderQty++;
    //     // quantity[index].textContent = orderQty;  
    //     
    // })

// options.addEventListener("click", function(event){
//     const targetElem = event.target.closest(".option");
//     if(targetElem){

//     }
// })

    // const infoPrice__SPAN = document.querySelector(".info__price span");
    // const totalOrderPrice = (jsonItems[option.id].price * dataOptions[option.id].qty).toFixed(2);
    // infoPrice__SPAN[option.id].textContent = totalOrderPrice;

    // 
    
    // let totalValuePrice = 0;
    // for (let i = 0; i < singlePrices__ARRAY.length; i++) {
    //     totalValuePrice += Number(singlePrices__ARRAY[i].textContent);
    // }
    
    // totalPrice.textContent = `$${totalValuePrice.toFixed(2)}`;


        // const infoPrice__SPAN = document.querySelectorAll(".info__price span");

    // infoPrice__SPAN[option.id] = totalOrderPrice;

    // const order = document.querySelectorAll(".order");
    // 
    // 

            // infoQty.textContent = dataOptions[option.id].qty + 'x';
        // 

                // quantity[option.id].textContent = dataOptions[option.id].qty;
        // infoQty.textContent = dataOptions[option.id].qty + 'x';
        // 
        
          // const totalOrderPrice = (jsonItems[option.id].price * dataOptions[option.id].qty).toFixed(2);
    // infoPrice__SPAN[option.id].textContent = totalOrderPrice;


        // 
    
    // let totalValuePrice = 0;
    // for (let i = 0; i < singlePrices__ARRAY.length; i++) {
    //     totalValuePrice += Number(singlePrices__ARRAY[i].textContent);
    // }
    
    // totalPrice.textContent = `$${totalValuePrice.toFixed(2)}`;
    // 



/*
import { renderContent } from "./functions.js";

const tabletWidth = 768;
const mobileWidth = 425;

//!DESERTS
let jsonItems;

const options = document.querySelectorAll(".option");
const optionsImage = document.querySelectorAll(".option__image img");
const optionsKind = document.querySelectorAll(".option__kind");
const optionTitle = document.querySelectorAll(".option__title");
const optionPrice = document.querySelectorAll(".option__price");
const addToCart = document.querySelectorAll(".add-to-cart");
const minus = document.querySelectorAll(".add-to-cart__minus");
let quantity = document.querySelectorAll(".add-to-cart__quantity");
const plus = document.querySelectorAll(".add-to-cart__plus");
const cartTitle__SPAN = document.querySelector(".cart__title span");


options.forEach((item, index)=>{
    item.id = index
})
function generateOptionObj(parent){
    let optionsData = [];
    for (let i = 0; i < parent.length; i++) {
        optionsData.push(
            {
            id: i,
            qty: 0,
            clicks: 0,
        }
    )
}
return optionsData;
}

const dataOptions = generateOptionObj(options);
 

let orderTitle;
let infoQty;
let infoPrice__SPAN;
let singlePrices__ARRAY = document.querySelectorAll('.info__price span');
const totalPrice = document.querySelector(".total__price");

document.querySelector(".options").addEventListener("click", function(event) {
    const targetElem = event.target.closest(".add-to-cart");
    const closestPlus = event.target.closest(".add-to-cart__plus");
    const closestMinus = event.target.closest(".add-to-cart__minus");
    const option = event.target.closest(".option");
    
    
    if(targetElem && dataOptions[option.id].clicks < 1){
        targetElem.classList.add("active");
        option.classList.add("active");
        dataOptions[option.id].qty = 1;
        quantity[option.id].textContent = dataOptions[option.id].qty;
        createOrder(
            optionTitle[option.id].textContent,
            dataOptions[option.id].qty,
            jsonItems[option.id].price,
            option.id
        )
        dataOptions[option.id].clicks++;
    }

    const orderIfnoQty = document.querySelectorAll(".info__quantity");
    
    const selectedOrder = document.getElementById(`${dataOptions[option.id].id}-cart`);
    const selectedOrder__qty = selectedOrder.querySelector(".info__quantity");
    const selectedOrder__totalPrice = selectedOrder.querySelector(".info__price span");
    
    
    if(closestPlus){
        dataOptions[option.id].qty++;
        quantity[option.id].textContent = dataOptions[option.id].qty;
        selectedOrder__qty.textContent = dataOptions[option.id].qty + 'x'; 
    }else if(closestMinus){
        dataOptions[option.id].qty--;
        quantity[option.id].textContent = dataOptions[option.id].qty;
        selectedOrder__qty.textContent = dataOptions[option.id].qty + 'x';
    }
    
    
        const totalOrderPrice = (jsonItems[option.id].price * dataOptions[option.id].qty).toFixed(2);
        selectedOrder__totalPrice.textContent = totalOrderPrice;
    
        const infoPrice__SPAN = document.getElementsByClassName("info__price");
        let priceTotal = 0;
        

        for (const element of infoPrice__SPAN) {
            const spanElem = element.querySelector("span");
            priceTotal += Number(spanElem.textContent);
        }
        
        totalPrice.textContent = '$' + priceTotal.toFixed(2);
    
    const deletedOrder = selectedOrder.querySelector(".order__remove");

    
    let sum = 0;

    for (const value of dataOptions) {
        sum += value.qty;
    }
    function updateOrdersAmount(){
        for (const value of dataOptions) {
            sum = value.qty;
        }
    }

    function updateTotal() {
        for (const element of infoPrice__SPAN) {
            const spanElem = element.querySelector("span");
            priceTotal += Number(spanElem.textContent);
        }
    }
    
    deletedOrder.addEventListener("click", function(event) {
        const oldOrderAmount = Number(quantity[option.id].textContent);
        dataOptions[option.id].qty = 0;
        dataOptions[option.id].clicks = 0;
        sum -= oldOrderAmount;
        updateTotal();
        cartTitle__SPAN.textContent = sum;
        targetElem.classList.remove("active");
        removeOrder(selectedOrder.closest(".order"));
        if(sum === 0){
            orders.classList.remove("active");
            reminder.classList.remove("active");
            total.classList.remove("active");
            confirmOrder.classList.remove("active");
            emptyCart.classList.add("active");
        }
    })
    if(dataOptions[option.id].qty == 0){
        dataOptions[option.id].clicks = 0;
        option.classList.remove("active")
        targetElem.classList.remove("active");
        removeOrder(selectedOrder.closest(".order"));
    }

    if(sum >= 1){
        orders.classList.add("active");
        reminder.classList.add("active");
        total.classList.add("active");
        confirmOrder.classList.add("active");
        emptyCart.classList.remove("active");
    }
    else{
        orders.classList.remove("active");
        reminder.classList.remove("active");
        total.classList.remove("active");
        confirmOrder.classList.remove("active");
        emptyCart.classList.add("active");
    }

    for (const element of dataOptions) {
        console.log(element);
    }
    const order = document.getElementsByClassName("order");
    cartTitle__SPAN.textContent = sum;
})

const orderItem = document.querySelectorAll(".order");



//FUNCTONS

function getOrder(option, order){
    for (let value of order) {
        return value;
    }
}

const data = new XMLHttpRequest();
    async function render(){
    try{
        const jsonResponse = await fetch('data.json');
        jsonItems = await jsonResponse.json();
        jsonItems.forEach((item, index)=>{
            item.id = index
        })        
        renderContent(
            jsonItems, 
            options, 
            optionsImage, 
            optionsKind, 
            optionTitle, 
            optionPrice
        );
         
        }
        catch(error){
        data.open("GET", "data.json");
        data.addEventListener("load", function(event) {
            jsonItems = JSON.parse(data.responseText);

            renderContent(
                jsonItems, 
                options, 
                optionsImage, 
                optionsKind, 
                optionTitle, 
                optionPrice
            );
        })
        data.send();
        console.error('Using AJAX:\n ' + error.message);
        
        }
    }
    render();

//!CART
const emptyCart = document.querySelector(".empty-cart");
const orders = document.querySelector(".orders");
const total = document.querySelector(".total");
const reminder = document.querySelector(".reminder");
const confirmOrder = document.querySelector(".cart__confirm-order");
const confirmedOrder = document.querySelector(".confirmed-order");
const startNewOrder = document.querySelector(".confirmed-order__start-new-order");
const totalConfirmedPrice = document.querySelector(".orders-confirmed__total-price");

confirmOrder.addEventListener("click", function(event) {
    confirmedOrder.classList.add("active");
    confirmedOrder.showModal(); //to open a dialog
    renderFinalOrder(document.querySelectorAll(".order"), jsonItems, dataOptions);
})
startNewOrder.addEventListener("click", function(event){
    confirmedOrder.classList.remove("active");
    confirmedOrder.close(); //to close a dialog
    resetOrder();
})

function resetOrder(){
    let sum = 0;
    for (const element of dataOptions) {
        element.qty = 0;
        element.clicks = 0;
        options[element.id].classList.remove("active")
        addToCart[element.id].classList.remove("active");
        cartTitle__SPAN.textContent = sum;
        totalPrice.textContent = '$' + sum.toFixed(2);

        orders.classList.remove("active");
        reminder.classList.remove("active");
        total.classList.remove("active");
        confirmOrder.classList.remove("active");
        emptyCart.classList.add("active");
    }
    resetFinalOrders();
    removeAllOrders();
}

function renderFinalOrder(allOrders, data, dataOptions){
    let allOrderIds = [];
    for (const element of allOrders) {
        allOrderIds.push(parseInt(element.id));
    }
    const allTotalOrderPrices = document.querySelectorAll(".info__price span");
    let orderPricesContents = [];
    for (const element of allTotalOrderPrices) {
        orderPricesContents.push(Number(element.textContent));
    }
    totalConfirmedPrice.textContent = totalPrice.textContent;
    allOrderIds.forEach((item, index)=>{
        createFinalOrder(data, item, dataOptions, orderPricesContents);
    })
}

function createFinalOrder(dataJson, id, dataOptions, orderPrices){
    const finalOrder = document.createElement("article");
    const finalOrderInformation = document.createElement("div");
    const finalOrderImage = document.createElement("div");
    const finalOrderImage__img = document.createElement("img");
    const finalOrderDescription = document.createElement("div");
    const finalOrderTitle = document.createElement("p");
    const finalOrderAmount = document.createElement("div");
    const finalOrderQuantity = document.createElement("p");
    const finalOrderSinglePrice = document.createElement("p");
    const finalOrderSinglePrice__SPAN = document.createElement("span");
    const finalOrderTotal = document.createElement("p");
    const finalOrderTotal__SPAN = document.createElement("span");

    finalOrder.classList.add("orders-confirmed__item");
    finalOrder.classList.add("orders-item");
    finalOrderInformation.classList.add("orders-item__information");
    finalOrderImage.classList.add("orders-item__image");
    finalOrderDescription.classList.add("orders-item__description");
    finalOrderTitle.classList.add("orders-item__title");
    finalOrderAmount.classList.add("orders-item__amount");
    finalOrderQuantity.classList.add("orders-item__quantity");
    finalOrderSinglePrice.classList.add("orders-item__single-price");
    finalOrderTotal.classList.add("orders-item__total");
    
    finalOrderImage__img.src = dataJson[id].image.thumbnail;
    finalOrderImage__img.alt = dataJson[id].name;
    finalOrderTitle.textContent = dataJson[id].name;
    finalOrderQuantity.textContent = dataOptions[id].qty + 'x';
    finalOrderSinglePrice.textContent = '@ $';
    finalOrderSinglePrice__SPAN.textContent = dataJson[id].price.toFixed(2);
    finalOrderTotal.textContent = '$ ';
    finalOrderTotal__SPAN.textContent = (dataJson[id].price * dataOptions[id].qty).toFixed(2);

    const confirmedOrders = document.querySelector(".orders-confirmed");
    confirmedOrders.prepend(finalOrder);
    finalOrder.append(finalOrderInformation);
    finalOrder.append(finalOrderTotal);
    finalOrderTotal.append(finalOrderTotal__SPAN);
    finalOrderInformation.appendChild(finalOrderImage);
    finalOrderImage.appendChild(finalOrderImage__img);
    finalOrderInformation.append(finalOrderDescription);
    finalOrderDescription.appendChild(finalOrderTitle);
    finalOrderDescription.append(finalOrderAmount);
    finalOrderAmount.appendChild(finalOrderQuantity);
    finalOrderAmount.appendChild(finalOrderSinglePrice);
    finalOrderSinglePrice.appendChild(finalOrderSinglePrice__SPAN);
}

function resetFinalOrders(){
    const finalOrder = document.querySelectorAll(".orders-item");
    for (const element of finalOrder) {
        element.remove();
    }
}


orders.addEventListener("click", function(event){
    const targetElem = event.target.closest(".order__remove");
    if(targetElem){
        const targetIndex = jsonItems.filter((item, index)=>{
            return item.name == orderTitle.textContent;
        })
        event.target.closest(".order").remove();
    }else{
         
    }
})


function removeAllOrders() {
    [...document.querySelectorAll(".order")].forEach((item, index)=>{
        item.remove();
    })
}

function removeOrder(order){
    order.remove();
}

function createOrder(
    itemName, 
    itemQty, 
    itemPrice,
    id
) {    
    const orderRemove__SRC = `/assets/images/icon-remove-item.svg`;

    const order = document.createElement("article");
    const orderDescription = document.createElement("div");
    orderTitle = document.createElement("p");
    const orderInfo = document.createElement("div");
    infoQty = document.createElement("p");
    const infoPrices = document.createElement("div");
    const infoSinglePrice = document.createElement("p");
    const infoSinglePrice__SPAN = document.createElement("span");
    const infoPrice = document.createElement("p");
    infoPrice__SPAN = document.createElement("span");
    const orderRemove = document.createElement("a");
    const orderRemove__IMAGE = document.createElement("img");


        order.classList.add("order");
        order.classList.add("orders__order");
        orderDescription.classList.add("order__description");
        orderTitle.classList.add("order__title");
        orderInfo.classList.add("order__info");
        orderInfo.classList.add("info");
        infoQty.classList.add("info__quantity");
        infoPrices.classList.add("info__prices");
        infoSinglePrice.classList.add("info__single-price");
        infoPrice.classList.add("info__price");
        orderRemove.classList.add("order__remove");


        orderTitle.textContent = itemName;
        order.id = id + '-cart';
        infoQty.textContent = `${itemQty}x`;
        infoSinglePrice.textContent = `@$`;
        infoSinglePrice__SPAN.textContent = itemPrice.toFixed(2);
        infoPrice.textContent = `$`;
        orderRemove.style.cursor = 'pointer';
        orderRemove__IMAGE.src = orderRemove__SRC;
        orderRemove__IMAGE.alt = 'reomve item';
    
            orders.append(order);
            order.appendChild(orderDescription);
            orderDescription.appendChild(orderTitle);
            orderDescription.append(orderInfo);
            orderInfo.appendChild(infoQty);
            orderInfo.append(infoPrices);
            infoPrices.append(infoSinglePrice);
            infoSinglePrice.append(infoSinglePrice__SPAN);
            infoPrices.append(infoPrice);
            infoPrice.appendChild(infoPrice__SPAN);
            order.append(orderRemove);
            orderRemove.append(orderRemove__IMAGE);
    
}
 */