// --------------------------- Best selling section starts  ------------------------------------------

// This function creates product card for top selling and top deals section
function createBestSellingSeries(i) {

    // defining different name, image, price for each printer
    var seriesName = productsSeries[i];

    // generating random image
    var image = "canon" + [i * 3 + 5];

    // generating random price
    price = (i + 1) * 24990;

    // creating a div for product card
    const card = document.createElement('div');

    // creating product card inside the new div
    card.innerHTML = `

        <div class="top-product">
            <div class="top-product-details">
                <p class="top-product-brand">Canon&reg;</p>
                <p class="top-product-name">${seriesName} Series</p>
                <p> <span class="top-product-new-price">From ${price - (50 / 100 * price)}</span> <span
                    class="top-product-old-price">${price}</span></p>
                <p class="top-product-description">Color | Efficient <br> Heavy Load</p>
            </div>
            <img src="images/products_images/${image}.png" alt="" height="150px">
        </div>

    `

    // whenever the new div is clicked, the page scrolls to Products Slider Section 
    card.addEventListener('click', function () {

        document.getElementById('products-slider-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

    // returns the new div card
    return card;

}

// creates three top-product cards using for loop
for (let i = 0; i < 3; i++) {

    // running the createBestSellingSeries() function and appending the new div inside top-products div
    const productCard = createBestSellingSeries(i);
    document.getElementById('top-products').appendChild(productCard);

}

// --------------------------- Best selling section ends  ------------------------------------------


// --------------------------- Products slider section starts  ------------------------------------------

// This function creates individual sliding product cards
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

            <img src="images/products_images/${image}.png" alt="" width="170px"> 

            <div class="slider-product-lower">

                <div>
                    <p class="product-name">${name}</p>
                    <p class="product-rating"><img src="icons/rating-star.png" alt="" height="10px">${parseFloat(randomNumber.toFixed(1)) * 2 + 3}/5(${parseFloat(Math.floor(randomNumber * 100 + 100))}) - ${Math.floor(randomNumber * 500 + 200)} Sold</p>
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

    // adding conclick function to create the products detailed page 
    card.querySelector('.slider-product').setAttribute("onclick", "createProductPage(" + i + ")");

    // returns the newly made product card
    return card;

}

// creating product cards for all product exept the last one
for (let i = 0; i < productsName.length - 1; i++) {

    // running createSliderProducts() and append the newly made card inside products slider container div
    const productCard = createSliderProducts(i);
    document.getElementById('products-slider-container').appendChild(productCard);

}

// --------------------------- Products slider section ends  ------------------------------------------


// ----------------------------- Top deals section starts --------------------------------------------

// Creating 3 top deal product cards and append indside div having class 'top-deals-products'
for (let i = 2; i >= 0; i--) {

    const productCard = createBestSellingSeries(i);
    document.getElementById('top-deal-products').appendChild(productCard);

}

// ----------------------------- Top deals section ends --------------------------------------------


// --------------------------- Products detailed section starts  ------------------------------------------

document.querySelector("#product-details-section").innerHTML = `

        <div>

            <div class="product-details-upper">

                <div class="product-details-upper-left">

                    <img src="images/products_images/canon0.png" alt="" id="product-detail-image" width="100%">

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

                    <p class="rating-details"> <img src="icons/rating-star.png" height="10px" alt=""> 4.2/5 (153
                        reviews) -
                        216 sold</p>

                    <div class="price-details">
                        <div>

                            <span class="current-price">रु 0</span>&nbsp;&nbsp;
                            <span class="old-price-home old-price"> रु 0 </span> &nbsp; 
                            <span class="discount-percent"> 50% off</span>
                        </div>
                        <p class="tax-details">Shipping and taxes extra</p>
                    </div>

                    <div class="quantity-div">

                        <div id="quantity-div-inner">

                            <span>Quantity</span>

                            <div class="product-quantity-div">1</div>

                            <div class="quantity-changing-buttons">
                                <img src="icons/up-arrow.png" alt="" height="10px" onclick="increaseQuantity()">
                                <img src="icons/down-arrow2.png" alt="" height="10px" onclick="decreaseQuantity()">
                            </div>

                            <div class="add-to-cart-div" onclick="updateCart()">
                                <img src="icons/electricity.png" height="20px" alt="">
                                Add to cart
                            </div>


                        </div>

                    </div>

                    <div class="buy-now-button-div" onclick="buyNow()">
                        <img src="icons/electricity.png" width="20px" alt="">
                        <input type="button" value="Buy Now" class="">
                    </div>

                </div>

            </div>

            <div class="product-details-lower">

            </div>

            <div class="products-back-button-div" onclick="goBackToProducts()">

                <img src="icons/back.png" alt="" height="12px">
                <button id="goBackToProductsButton">Products</button>

            </div>

        </div>


`;


// Whenever any product is clicked, the detailed page of that product is generated by this function
function createProductPage(i) {

    clickedProductIndex = i;
    const productDetails = getProductDetails(i);  // multiple details are stored in productDetails variable

    // by default buying quantity of product is 1
    document.querySelector(".product-quantity-div").innerHTML = '1';

    // displaying the name of clicked product
    document.querySelector("#product-title").innerHTML = productDetails.title;

    // displaying the image of clicked product
    document.querySelector('#product-detail-image').setAttribute("src", "images/products_images/canon" + i + ".png")

    // storing the old price of clicked product
    var oldPrice = productsPrice[i];

    // displaying the old price
    document.querySelector('.old-price-home').innerHTML = oldPrice;

    // calculating new new price after discount acc to the product
    if (i == 18) {
        document.querySelector(".current-price").innerHTML = "रु " + (oldPrice - (36 / 100 * oldPrice));
    }
    else {
        document.querySelector(".current-price").innerHTML = "रु " + (oldPrice - (50 / 100 * oldPrice));
    }

    // Hides all the sections on the page and shows the particular product's detailed section
    var sections = document.querySelectorAll('section');

    for (i = 0; i < sections.length; i++) {
        document.querySelectorAll('section')[i].style.display = 'none';
    }

    document.querySelector('#product-details-section').style.display = 'flex';

    // showing the details from top of the page
    window.scrollTo({
        top: 67,
    });

    // escape button returns to the main page
    document.addEventListener("keydown", function (event) {
        if (event.key == "Escape") {
            goBackToProducts();
        }
    });

}

// gets the details of the clicked product, returns the values in form of object
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

// increases the number of items to add to cart or to buy
function increaseQuantity() {

    var quantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);
    quantity = quantity + 1;
    document.querySelector(".product-quantity-div").innerHTML = quantity;

}

// decreases the number of items to add to cart or to buy
function decreaseQuantity() {

    var quantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);

    if (quantity > 0) {

        quantity = quantity - 1;
        document.querySelector(".product-quantity-div").innerHTML = quantity;

    }

}

// hides the product detailed page and shows the main page
function goBackToProducts() {

    var sections = document.querySelectorAll('section');

    // showing all the sections on the page
    for (i = 0; i < sections.length; i++) {
        document.querySelectorAll('section')[i].style.display = 'flex';
    }

    // hiding the detailed section
    document.querySelector('#product-details-section').style.display = 'none';

    // scrolling to the products slider section
    document.getElementById('products-slider-section').scrollIntoView({

        block: 'start'

    });

}

// --------------------------- Products detailed section ends  ------------------------------------------