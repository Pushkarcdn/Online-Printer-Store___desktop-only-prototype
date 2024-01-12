document.querySelector("#hero-section").addEventListener("click", function(){
    document.querySelector(".products-text").scrollIntoView({ behavior: 'smooth' });
});

function createProductCard(i) {

    // defining different name, image, price for each printer
    var name = productsName[i];
    var price = productsPrice[i];
    var image = "canon" + [i];

    // generating a random number
    // it is used to randomly add different ratings to each product
    var randomNumber = Math.random();

    // creating a div for product card
    const card = document.createElement('div');

    // creating the actual product card
    card.innerHTML = `

    <div class="products-card">

        <div class="product-upper-details">

            <span class="paper-detail">A4 Colour</span>

            <span class="launch-date">New</span>
        
        </div>

        <img src="../images/products_images/${image}.png" alt="" height="200px" id="product-image">

        <div class="product-lower-details">

            <p class="product-name">${name}</p>

            <div>

                <img src="/icons/rating-star.png" alt="" height="10px">

                <span class="rating-text">${parseFloat(randomNumber.toFixed(1)) * 2 + 3}/5(${parseFloat(Math.floor(randomNumber * 100 + 100))}) - ${Math.floor(randomNumber * 500 + 200)} Sold</span>

            </div>

            <hr>

            <div class="product-price">

                <p>रू ${Math.floor(price - (50 / 100 * price))} &nbsp;<span id="old-price">₹${price}</span>&nbsp;<span id="discount">50% off</span> </p>

                <p>inclusive of all taxes</p>
            
            </div>

            <hr>

        </div>

        <div class="product-buttons">

            <div class="compare-div">

                <input type="checkbox">

                <span>Compare</span>

            </div>

        </div>

    </div>   
    
    `;

    card.querySelector('#product-image').setAttribute("onclick", "createProductPage(" + i + ")");
    card.querySelector('.product-lower-details').setAttribute("onclick", "createProductPage(" + i + ")");
    card.querySelector('input[type="checkbox"]').setAttribute("onclick", "updateCheckboxCount()");


    return card;

}

var productsName = [
    "PIXMA MG3620",
    "PIXMA Pro-100",
    "PIXMA TS9120",
    "PIXMA iP8720",
    "PIXMA G6020",
    "PIXMA MX922",
    "PIXMA TR8520",
    "MAXIFY MB2720",
    "SELPHY CP1300",
    "imageCLASS MF236n",
    "imageCLASS MF733Cdw",
    "imageCLASS LBP6230dw",
    "imagePROGRAF PRO-1000",
    "imageFORMULA DR-C225 II",
    "imageRUNNER C5540i"
];

var productsPrice = [
    29000,
    19900,
    18990,
    12999,
    21999,
    37999,
    24999,
    19999,
    24999,
    12999,
    29999,
    14999,
    25999,
    24999,
    149999
];


for (let i = 0; i < productsName.length; i++) {

    const productCard = createProductCard(i);
    document.getElementById('products-section').appendChild(productCard);

}



document.querySelector("#product-details-section").innerHTML = `

<div>

            <div class="product-details-upper">

                <div class="product-details-upper-left">

                    <img src="/images/products_images/canon0.png" alt="">

                </div>

                <div class="product-details-upper-right">

                    <div class="product-general-details">

                        <p class="pr-id">Pr.ID: 506250</p>

                        <p class="brand-name">CANON&reg;</p>

                        <p class="model-name" id="product-title">Image MX20221</p>

                    </div>

                    <p class="breif-details">"Print brilliance, pronto. Effortless, vibrant, perfection."</p>

                    <p class="description" id="product-description">Unleash efficiency with our sleek printer: fast,
                        vibrant, and user-friendly.
                        Maximize productivity with cost-effective, energy-efficient printing. Elevate your workspace
                        now.</p>

                    <p class="rating-details"> <img src="/icons/rating-star.png" height="10px" alt=""> 4.2/5 (153
                        reviews) -
                        216 sold</p>

                    <div class="price-details">
                        <div>

                            <span class="current-price">रु 19900</span>&nbsp;&nbsp;<span class="old-price"> रु 39900
                            </span> &nbsp; <span class="discount-percent"> 50%
                                off</span>
                        </div>
                        <p class="tax-details">Shipping and taxes extra</p>
                    </div>

                    <div class="quantity-div">

                        <div id="quantity-div-inner">

                            <span>Quantity</span>

                            <div class="product-quantity-div">1</div>

                            <div class="quantity-changing-buttons">
                                <img src="/icons/up-arrow.png" alt="" height="10px" onclick="increaseQuantity()">
                                <img src="/icons/down-arrow2.png" alt="" height="10px" onclick="decreaseQuantity()">
                            </div>

                            <div class="add-to-cart-div" onclick="addedToCart()">
                                <img src="/icons/electricity.png" height="20px" alt="">
                                Add to cart
                            </div>


                        </div>

                    </div>

                    <div class="buy-now-button-div" onclick="buyNow()">
                        <img src="/icons/electricity.png" width="20px" alt="">
                        <input type="button" value="Buy Now" class="">
                    </div>

                </div>

            </div>

            <div class="product-details-lower">

            </div>

            <div class="products-back-button-div" onclick="goBackToProducts()">

                <img src="/icons/back.png" alt="" height="12px">
                <button id="goBackToProductsButton">Products</button>

            </div>

        </div>


`;

function createProductPage(i) {

    const productDetails = getProductDetails(i);  // multiple details are stored in productDetails

    document.querySelector("#product-title").innerHTML = productDetails.title;
    document.querySelector(".old-price").innerHTML = productDetails.price;
    document.querySelector(".current-price").innerHTML = "रु " + (productDetails.price - (50 / 100 * productDetails.price));

    // Hide the products page and show the product details page

    document.querySelector("#hero-section").style.display = "none";
    document.querySelector('#products-section').style.display = 'none';
    document.querySelector('#product-details-section').style.display = 'flex';

    window.scrollTo({
        top: 67,
    });

    document.querySelector(".products-text").style.display = "none";

    document.addEventListener("keydown", function (event) {

        if (event.key == "Escape") {
            goBackToProducts();
        }

    });

}

function getProductDetails(i) {

    var title = productsName[i];
    var price = productsPrice[i];
    // var image = image[i];

    return {

        title: `${title}`,
        price: `${price}`,
        // image: `${image}`,

    };
}

function increaseQuantity() {

    var quantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);
    quantity = quantity + 1;
    document.querySelector(".product-quantity-div").innerHTML = quantity;

}

function decreaseQuantity() {

    var quantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);

    if (quantity > 0) {

        quantity = quantity - 1;
        document.querySelector(".product-quantity-div").innerHTML = quantity;

    }

}

function addedToCart() {

    var cartItems = parseInt(document.querySelector("#cart-items-amount").innerHTML);

    var numberOfItems = parseInt(document.querySelector(".product-quantity-div").innerHTML);

    console.log(cartItems, typeof (cartItems));
    console.log(numberOfItems, typeof (numberOfItems));

    cartItems = cartItems + numberOfItems;
    document.querySelector("#cart-items-amount").innerHTML = cartItems;

    document.querySelector("#message-right-bottom-div").style.display = 'flex';
    document.querySelector("#message-right-bottom-div").innerHTML = numberOfItems + ` items added to cart. <br> Please sign in to buy.`;

    setTimeout(function () {
        document.querySelector("#message-right-bottom-div").style.display = 'none';
    }, 3000);

}

function buyNow() {

    document.querySelector("#message-right-bottom-div").style.display = 'flex';
    document.querySelector("#message-right-bottom-div").innerHTML = `Please sign in to make any purchases. `;

    setTimeout(function () {
        document.querySelector("#message-right-bottom-div").style.display = 'none';
    }, 3000);
}

function goBackToProducts() {

    document.querySelector("#hero-section").style.display = "flex";
    document.querySelector('#products-section').style.display = 'flex';
    document.querySelector('#product-details-section').style.display = 'none';
    document.querySelector(".products-text").style.display = "block";

    var element = document.querySelector(".products-text");
    element.scrollIntoView({ behavior: "instant" });

}

function updateCheckboxCount() {

    // Get all compareCheckBoxes
    var compareCheckBoxes = document.querySelectorAll('input[type="checkbox"]');

    // Count the checked compareCheckBoxes
    checkedCount = 0;
    compareCheckBoxes.forEach(function (checkbox) {

        if (checkbox.checked) {

            checkedCount++;

        }

    })

    if (checkedCount <= 1) {

        document.querySelector("#compare-button-div").style.display = "none";

    }
    else {

        document.querySelector("#compare-items-number").innerHTML = `Compare ( ` + checkedCount + ` )`;
        document.querySelector("#compare-button-div").style.display = "flex";

    }

}

document.querySelector("#compare-button-div").addEventListener("click", function () {
 
    document.querySelector("#message-right-bottom-div").style.display = 'flex';
    document.querySelector("#message-right-bottom-div").innerHTML = `You need to sign in to compare these items`;

    setTimeout(function () {
        document.querySelector("#message-right-bottom-div").style.display = 'none';
    }, 3000);

});
