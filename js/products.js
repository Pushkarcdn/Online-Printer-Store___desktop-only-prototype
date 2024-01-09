function createProductCard(name, price, image) {

    const card = document.createElement('div');
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

                <span class="rating-text">4.5/5(166) - 792 Sold</span>

            </div>

            <hr>

            <div class="product-price">

                <p>₹ ${price} &nbsp;<span id="old-price">₹24900</span>&nbsp;<span id="discount">21% off</span> </p>

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
    "imageRUNNER ADVANCE C5540i"
];

var productsPrice = [
    19000,
    14999,
    11999,
    12999,
    29999,
    17999,
    34999,
    99999,
    44999,
    12999,
    29999,
    24999,
    15999,
    24999,
    449999
];

const productContainer = document.getElementById('products-section');

for (let i = 0; i < productsName.length; i++) {

    const productCard = createProductCard(productsName[i], productsPrice[i], "canon" + [i]);
    productContainer.appendChild(productCard);

}