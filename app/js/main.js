$(function () {
    $(".works__item").on("click", function () {
        $(this).toggleClass("show");
    })
    $(".result__slider").slick({
        arrows: false,
    })
    $(".menu-burger").on("click", function () {
        $(".menu").toggleClass("show");
        $(".menu__list").toggleClass("show");
        $(".header__link").toggleClass("show")
    })
});