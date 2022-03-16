const creatFooter = () =>{
    let footer =document.querySelector('footer');

    footer.innerHTML= `<div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about Company</p>
<p class="info">A company profile is an introduction 
    to your business that details what you sell, how 
    you were founded, what your mission is, how you 
    manufacture or source your products, and why you 
    serve customers. Your company profile should give 
    buyers an additional reason to do business with you.</p>
<p class="info">support Email: fahim15-10431@diu.edu.bd</p>
<p class="info">Phone: 01761606673</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terma & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twiter</a>
    </div>
</div>
<p class="footer-credi">clothing, Best apparels online store</p>`;
}

creatFooter();