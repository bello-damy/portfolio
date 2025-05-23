/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2025 Yussuf Bello (https://yussufbello.com)
* Licensed: (https://yussufbello.com/licenses)
* Coded by www.yussufbello.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


//my js codes

//view my work button in Landing
document.addEventListener('DOMContentLoaded', function () {
    const viewMyWorkBtn = document.getElementById('viewMyWorkBtn');
    const portfolioSection = document.getElementById('portfolio');

    if (viewMyWorkBtn && portfolioSection) {
        viewMyWorkBtn.addEventListener('click', function () {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});