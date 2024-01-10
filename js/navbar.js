function createNavbar() {

    const nav = document.querySelector("nav")
    nav.innerHTML = `

    <span><a id="nav-home-button" href="/index.html">Home</a></span>

    <span><a id="nav-products-button" href="/html/products.html">Products</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-blog-button" href="/html/blog.html">Blog</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-research-button" href="/html/research.html">Research</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-about-button" href="/html/about.html">About Us</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-contact-button" href="/html/contact.html">Contact</a></span>
    
    `;

    boldCurrentPageName();

}

function boldCurrentPageName() {
    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();
    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');
}

createNavbar();