// MINIMUM SET BEST PRICE
const BestPriceId = document.getElementById('best-price');
BestPriceId.innerText = 1299;
// MINIMUM SET TOTAL PRICE
let totalPriceId = document.getElementById('total-price');
totalPriceId.innerText = 1299;
// MINIMUM SET TOTAL
let grandTotalId = document.getElementById('total');
grandTotalId.innerText = 1299;

const deviceWiseModelName = document.getElementById('extra-memory-cost');
const storageWiseModelName = document.getElementById('extra-storage-cost');
const optionWiseDeliveryCharge = document.getElementById('delivery-charge');
const couponCodeId = document.getElementById('coupon-code');



// SET MIN/MAX MEMORY COST PROCESS
function setMemoryCost(deviceWiseModel) {
    if(deviceWiseModel == '8gb-memory') {
        deviceWiseModelName.innerText = 0;
        const eightGbMemoryCost = parseInt(deviceWiseModelName.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        // const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const extraStorageCost = parseInt(storageWiseModelName.innerText);
        const deliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(bestPriceCost);
        if(eightGbMemoryCost == 0) {
            const totalPrice = bestPriceCost + extraStorageCost + eightGbMemoryCost + deliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
    else {
        deviceWiseModelName.innerText = 180;
        const sixteenGbMemoryCost = parseInt(deviceWiseModelName.innerText);
        // console.log(sixteenGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        // const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const extraStorageCost = parseInt(storageWiseModelName.innerText);
        const deliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(bestPriceCost);
        if(sixteenGbMemoryCost == 180) {
            const totalPrice = bestPriceCost + extraStorageCost + sixteenGbMemoryCost + deliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
    
}

// SET MIN/MAX STORAGE COST PROCESS
function setStorageCost(storageWiseModel) {
    if(storageWiseModel == '256gb-storage') {
        storageWiseModelName.innerText = 0;
        const twoFiftySixGbStorageCost = parseInt(storageWiseModelName.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const deliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(bestPriceCost);
        if(twoFiftySixGbStorageCost == 0) {
            const totalPrice = bestPriceCost + extraMemoryCost + twoFiftySixGbStorageCost + deliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
    else if(storageWiseModel == '512gb-storage') {
        storageWiseModelName.innerText = 100;
        const fiveHundredTwelveGbStorageCost = parseInt(storageWiseModelName.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const deliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(bestPriceCost);
        if(fiveHundredTwelveGbStorageCost == 100) {
            const totalPrice = bestPriceCost + extraMemoryCost + fiveHundredTwelveGbStorageCost + deliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
    else {
        storageWiseModelName.innerText = 180;
        const oneTbStorageCost = parseInt(storageWiseModelName.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const deliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(bestPriceCost);
        if(oneTbStorageCost == 180) {
            const totalPrice = bestPriceCost + extraMemoryCost + oneTbStorageCost + deliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
}

// SET DELIVERY CHARGE COST PROCESS
function setDeliveryCost(deliveryCharge) {
    if(deliveryCharge == 'prime-charge') {
        optionWiseDeliveryCharge.innerText = 0;

        const primeDeliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const extraStorageCost = parseInt(storageWiseModelName.innerText);
        // console.log(bestPriceCost);
        if(primeDeliveryCharge == 0) {
            const totalPrice = bestPriceCost + extraMemoryCost + extraStorageCost + primeDeliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
    else {
        optionWiseDeliveryCharge.innerText = 20;

        const urgentDeliveryCharge = parseInt(optionWiseDeliveryCharge.innerText);
        // console.log(eightGbMemoryCost);
        const bestPriceCost = parseInt(BestPriceId.innerText);
        const extraMemoryCost = parseInt(deviceWiseModelName.innerText);
        const extraStorageCost = parseInt(storageWiseModelName.innerText);
        // console.log(bestPriceCost);
        if(urgentDeliveryCharge == 20) {
            const totalPrice = bestPriceCost + extraMemoryCost + extraStorageCost + urgentDeliveryCharge;
            totalPriceId.innerText = totalPrice;
            grandTotalId.innerText = totalPrice;
        }
    }
}


function couponCode() {
    let couponCodeNum = couponCodeId.value;
    if(couponCodeNum == 'stevekaku') {
        const TotalId  = document.getElementById('total');
        const grandTotalAmount = parseInt(TotalId.innerText);
        const discount = Math.ceil((grandTotalAmount * 20) / 100);
        grandTotalId.innerText = grandTotalAmount - discount;
        couponCodeId.value = '';
    }
    else {
        alert('Please Enter Valid Coupon Code!!!');
    }
}

// HANDLE 8 GB MEMORY BUTTON USING EVENT HANDLER
document.getElementById('8gb-memory').addEventListener('click', function () {
    setMemoryCost('8gb-memory');
});
// HANDLE 16 GB MEMORY BUTTON USING EVENT HANDLER
document.getElementById('16gb-memory').addEventListener('click', function () {
    setMemoryCost('16gb-memory');
});
// HANDLE 256 GB STORAGE BUTTON USING EVENT HANDLER
document.getElementById('256gb-storage').addEventListener('click', function () {
    setStorageCost('256gb-storage');
});
// HANDLE 512 GB STORAGE BUTTON USING EVENT HANDLER
document.getElementById('512gb-storage').addEventListener('click', function () {
    setStorageCost('512gb-storage');
});
// HANDLE 1 TB STORAGE BUTTON USING EVENT HANDLER
document.getElementById('1tb-storage').addEventListener('click', function () {
    setStorageCost('1tb-storage');
});
// HANDLE PRIME DELIVERY CHARGE BUTTON USING EVENT HANDLER
document.getElementById('prime-delivery').addEventListener('click', function () {
    setDeliveryCost('prime-charge');
});
// HANDLE URGENT DELIVERY CHARGE BUTTON USING EVENT HANDLER
document.getElementById('urgent-delivery').addEventListener('click', function () {
    setDeliveryCost('urgent-charge');
});
// HANDLE COUPON CODE BUTTON USING EVENT HANDLER
document.getElementById('apply-btn').addEventListener('click', function () {
    if(couponCodeId.value != '') {
        couponCode();
    }
    else {
        alert('Please Enter A Coupon Code!!!');
    }

});


