function createHeader() {

    document.querySelector("header").innerHTML = `

    <div class="header-upper-section">

        <div class="header-upper-left-section">

            <img src="../images/homepage_images/logo.png" height="45px" alt="">

            <div class="logo-text">
                <span>Prime</span>
                <span>Print Creativity</span>
            </div>

        </div>

        <div class="header-upper-right-section">

            <div class="header-search-box">
                <img src="../icons/search.png" alt="" height="23px">
                <input type="text" name="search" placeholder="Search Printers">
            </div>

            <div class="header-cart">
                <img src="../icons/cart.png" alt="" height="20px">
                <span>Cart (<span id="cart-items-amount">0</span>)</span>
            </div>
                
            <img src="../icons/person.png" alt="" height="25px">
            
            <div class="header-menu">
                <img src="../icons/menu.png" alt="" height="20px">
            </div>

        </div>

    </div>

    <hr class="header-line">
    
    `;

}

createHeader();