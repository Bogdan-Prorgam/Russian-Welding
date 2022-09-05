// Настройки слайдера товаров
category = ["Аппараты", "Маски", "Горелки"];
var swiper = new Swiper('.product_slider', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<p style="margin: 11%;">' + category[index] + '</p>' + '</span>';
        },
    },
});
// Настройки слайдера сертификатов

var sert = new Swiper('.sertificat', {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Субкатегории
var sub_app = document.getElementById("sub_app");
var sub_burn = document.getElementById("sub_burn");
var circle_1 = document.getElementById("circle_1");
var circle_2 = document.getElementById("circle_2");

function subcategory_1() {
    if (sub_burn.style.zIndex = "3") {
        sub_app.style.zIndex = "3";
        sub_app.style.opacity = "1";
        sub_burn.style.zIndex = "-1";
        sub_burn.style.opacity = "0";
    }
    else {
        sub_app.style.zIndex = "3";
        sub_app.style.opacity = "1";
    }
}

function subcategory_2() {
    if (sub_app.style.zIndex = "3") {
        sub_burn.style.zIndex = "3";
        sub_burn.style.opacity = "1";
        sub_app.style.zIndex = "-1";
        sub_app.style.opacity = "0";
    }
    else {
        sub_burn.style.zIndex = "3";
        sub_burn.style.opacity = "0.8";
    }
}