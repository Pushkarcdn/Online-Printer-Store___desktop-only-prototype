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

    // assigning each div a unique id
    card.id = "products-card" + i;

    // assigning an onclick function to each card according to the id
    card.setAttribute("onclick", "createProductPage(" + i + ")");

    // creating the actual product card
    card.innerHTML = `

    <div class="products-card">

        <div class="product-upper-details">

            <span class="paper-detail">A4 Colour</span>

            <span class="launch-date">New</span>
        
        </div>

        <img src="../images/products_images/${image}.png" alt="" height="200px">

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

    return card;

}

function createProductPage(i) {
    alert("This is card " + i)
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