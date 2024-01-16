var productsSeries = [
    "IMAGE",
    "MAXIFY",
    "PIXMA",
];

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

    return card;

}

for (let i = 0; i < productsName.length; i++) {

    const productCard = createSliderProducts(i);
    document.getElementById('products-slider-container').appendChild(productCard);

}

// Top Deals

for (let i = 2; i >= 0; i--) {

    const productCard = createBestSellingSeries(i);
    document.getElementById('top-deal-products').appendChild(productCard);

}