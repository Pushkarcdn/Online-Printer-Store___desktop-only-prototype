var productsSeries = [
    "IMAGE",
    "MAXIFY",
    "PIXMA",
];

var productsName = [
    "PIXMA MG3620",
    "MAXIFY MB2720",
    "imageCLASS MF236n",
    "PIXMA Pro-100",
    "PIXMA TS9120",
    "PIXMA iP8720",
    "imagePROGRAF PRO-1000",
    "PIXMA G6020",
    "imageFORMULA DR-C225 II",
    "SELPHY CP1300",
    "imageCLASS MF733Cdw",
    "imageCLASS MF733Cdw",
    "imageCLASS LBP6230dw",
    "PIXMA TR8520",
    "imagePROGRAF PRO-1000",
    "imageFORMULA DR-C225 II",
    "PIXMA MX922",
    "imageRUNNER C5540i",
    "ADVANCE DX 8705/8795/8786 Series"
];

var productsPrice = [
    29000,
    19900,
    18990,
    12999,
    21999,
    37999,
    12999,
    14999,
    24999,
    19999,
    37999,
    24999,
    12999,
    29999,
    14999,
    25999,
    24999,
    149999,
    310900
];

// Hero section Image Slider

var totalSliderImages = document.querySelectorAll("#slider-images>img").length;
var sliderCurrentIndex = 0;

function sliderNext() {

    sliderCurrentIndex = (sliderCurrentIndex + 1) % totalSliderImages;

    document.querySelector("#slider-images").style.transform = `translateX(-${window.innerWidth * sliderCurrentIndex}px)`;

}

function sliderPrevious() {

    sliderCurrentIndex = (sliderCurrentIndex - 1 + totalSliderImages) % totalSliderImages;

    document.querySelector("#slider-images").style.transform = `translateX(-${window.innerWidth * sliderCurrentIndex}px)`;

}

// Best selling products

function createBestSellingSeries(i) {


    // defining different name, image, price for each printer
    var seriesName = productsSeries[i];
    var image = "canon" + [i * 3 + 5];
    price = (i + 1) * 24990;

    // creating a div for product card
    const card = document.createElement('div');

    // creating the actual product card
    card.innerHTML = `

        <div class="top-product">
            <div class="top-product-details">
                <p class="top-product-brand">Canon&reg;</p>
                <p class="top-product-name">${seriesName} Series</p>
                <p> <span class="top-product-new-price">From ${price - (50 / 100 * price)}</span> <span
                    class="top-product-old-price">${price}</span></p>
                <p class="top-product-description">Color | Efficient <br> Heavy Load</p>
            </div>
            <img src="/images/products_images/${image}.png" alt="" height="150px">
        </div>

    `

    card.addEventListener('click', function () {

        document.getElementById('products-slider-section').scrollIntoView({

            behavior: 'smooth',
            block: 'start'

        });

    })

    return card;

}

for (let i = 0; i < 3; i++) {

    const productCard = createBestSellingSeries(i);
    document.getElementById('top-products').appendChild(productCard);

}

// Products Slider

function createSliderProducts(i) {

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

        <div class="slider-product">

            <div class="slider-product-upper">

                <div class="paper-type">
                    <span>A4 Colour</span>
                </div>

                <div class="launch-date">
                    <span>New</span>
                </div>

            </div>

            <img src="/images/products_images/${image}.png" alt="" width="170px"> 

            <div class="slider-product-lower">

                <div>
                    <p class="product-name">${name}</p>
                    <p class="product-rating"><img src="/icons/rating-star.png" alt="" height="10px">${parseFloat(randomNumber.toFixed(1)) * 2 + 3}/5(${parseFloat(Math.floor(randomNumber * 100 + 100))}) - ${Math.floor(randomNumber * 500 + 200)} Sold</p>
                </div>

                <hr>

                <div>
                    <p> <span class="new-price">रू ${price - (50 / 100 * price)}</span>&nbsp;<span class="old-price">रू
                            ${price}</span>&nbsp;<span class="discount-percent">50% off</span> </p>
                    <p class="price-tax-details">inclusive of all taxes</p>
                </div>

            </div>

        </div>
    
    `

    card.querySelector('.slider-product').setAttribute("onclick", "createProductPage(" + i + ")");

    return card;

}

for (let i = 0; i < productsName.length - 1; i++) {

    const productCard = createSliderProducts(i);
    document.getElementById('products-slider-container').appendChild(productCard);

}

// Top Deals

for (let i = 2; i >= 0; i--) {

    const productCard = createBestSellingSeries(i);
    document.getElementById('top-deal-products').appendChild(productCard);

}

// Products details page

document.querySelector("#product-details-section").innerHTML = `

        <div>

            <div class="product-details-upper">

                <div class="product-details-upper-left">

                    <img src="/images/products_images/canon0.png" alt="" id="product-detail-image" width="100%">

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

    document.querySelector('#product-detail-image').setAttribute("src", "/images/products_images/canon" + i + ".png")

    if (i == 18) {
        document.querySelector(".current-price").innerHTML = "रु " + (productDetails.price - (36 / 100 * productDetails.price));
    }
    else {
        document.querySelector(".current-price").innerHTML = "रु " + (productDetails.price - (50 / 100 * productDetails.price));
    }

    // Hide the products page and show the product details page

    var sections = document.querySelectorAll('section');

    for (i = 0; i < sections.length; i++) {
        document.querySelectorAll('section')[i].style.display = 'none';
    }


    document.querySelector('#product-details-section').style.display = 'flex';

    window.scrollTo({
        top: 67,
    });

    document.addEventListener("keydown", function (event) {

        if (event.key == "Escape") {
            goBackToProducts();
        }

    });

}

function getProductDetails(i) {

    var title = productsName[i];
    var price = productsPrice[i];
    var image = "canon" + i + ".png";

    return {

        title: `${title}`,
        price: `${price}`,
        image: `${image}`,

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

    var sections = document.querySelectorAll('section');

    for (i = 0; i < sections.length; i++) {
        document.querySelectorAll('section')[i].style.display = 'flex';
    }

    document.querySelector('#product-details-section').style.display = 'none';

    document.getElementById('products-slider-section').scrollIntoView({

        block: 'start'

    });

}