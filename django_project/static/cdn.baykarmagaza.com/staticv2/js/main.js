//  Main Swiper
let swiper = new Swiper(".bshopMain", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Transparent Header (Only on home page)
$(window).scroll(function () {
    const header = $("header");
    const divider = $("#divider");
    const basketCount = $("#basketCount");
    const toggleButton = $("#toggleButton")
    const navItems = $("nav a");
    const navActions = $(".navActions");
    const navActionsText = $(".navActions p");
    const mainLogo = $("#mainLogo");
    const darkLogo = $("#darkLogo");
    const userIcon = $("#userIcon")
    const darkUserIcon = $("#darkUserIcon")
    const userIcon2 = $("#userIcon2")
    const darkUserIcon2 = $("#darkUserIcon2")
    const ordersIcon = $("#ordersIcon")
    const darkOrdersIcon = $("#darkOrdersIcon")
    const langForm = $("#langForm")
    const langText = $("#langText")
    const langIcon = $("#langIcon")
    const darkLangIcon = $("#darkLangIcon")
    const basketIcon = $("#basketIcon");
    const darkBasketIcon = $("#darkBasketIcon");

    const slider = $(".swiper");
    const screenWidth = $(window).width();
    const sliderBottom = slider.offset().top + slider.outerHeight() - 80;
    if ($(window).scrollTop() >= sliderBottom) {
        header.css('background-color', 'rgba(255, 255, 255, 0.8)')
        if (header.hasClass('shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)]'))
            header.toggleClass('shadow-[0_5px_10px_-10px_rgb(255,255,255)] shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)]');
        divider.removeClass("bg-white").addClass("bg-black");
        basketCount.css('color', 'white')
        navItems.each(function () {
            $(this).removeClass('text-white').addClass('text-black')
            if (!$(this).hasClass('non-hover')) {
                $(this).removeClass('hover:bg-hoverblue').addClass('hover:text-hoverblue')
            }
        });
        navActions.each(function () {
            $(this).removeClass('text-white').addClass('text-black')
        });
        navActionsText.each(function () {
            $(this).removeClass('text-white').addClass('text-black')
            $(this).removeClass('group-hover:text-white').addClass('group-hover:text-hoverblue')

        });
        toggleButton.css('color', 'black')
        mainLogo.css("display", "none");
        darkLogo.removeClass('hidden').addClass("inline");
        basketIcon.removeClass('inline').addClass("hidden");
        darkBasketIcon.removeClass('hidden').addClass("inline");
        langForm.removeClass('hover:bg-hoverblue').addClass('hover:text-hoverblue')
        langText.addClass('group-hover:text-hoverblue')
        userIcon.css('display', 'none')
        userIcon2.css('display', 'none')
        ordersIcon.css('display', 'none')
        langIcon.css('display', 'none')
        darkUserIcon.css('display', 'inline')
        darkUserIcon2.css('display', 'inline')
        darkLangIcon.css('display', 'inline')
        darkOrdersIcon.css('display', 'inline')
    } else {
        header.css('background-color', 'rgba(0,0,0,0.2)')
        if (header.hasClass('shadow-[0_5px_10px_-10px_rgb(255,255,255)'))
            header.toggleClass('shadow-[0_5px_10px_-10px_rgb(255,255,255)] shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)]');
        divider.removeClass("bg-black").addClass("bg-white");
        basketCount.css('color', 'black')
        navItems.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
            if (!$(this).hasClass('non-hover')) {
                $(this).addClass('hover:bg-hoverblue').removeClass('hover:text-hoverblue')
            }
        });
        navActions.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
        });
        navActionsText.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
            $(this).removeClass('group-hover:text-hoverblue').addClass('group-hover:text-white')
        });
        toggleButton.css('color', 'white')
        mainLogo.css("display", "inline");
        darkLogo.removeClass('inline').addClass("hidden");
        basketIcon.removeClass('hidden').addClass("inline");
        darkBasketIcon.removeClass('inline').addClass("hidden");
        langForm.addClass('hover:bg-hoverblue').removeClass('hover:text-hoverblue')
        langText.removeClass('group-hover:text-hoverblue')
        userIcon.css('display', 'inline')
        userIcon2.css('display', 'inline')
        ordersIcon.css('display', 'inline')
        langIcon.css('display', 'inline')
        darkUserIcon.css('display', 'none')
        darkUserIcon2.css('display', 'none')
        darkLangIcon.css('display', 'none')
        darkOrdersIcon.css('display', 'none')

    }
});

$(window).ready(function () {
    const header = $("header");
    const divider = $("#divider");
    const basketCount = $("#basketCount");
    const toggleButton = $("#toggleButton")
    const navItems = $("nav a");
    const navActions = $(".navActions");
    const navActionsText = $(".navActions p");
    const mainLogo = $("#mainLogo");
    const darkLogo = $("#darkLogo");
    const userIcon = $("#userIcon")
    const darkUserIcon = $("#darkUserIcon")

    const userIcon2 = $("#userIcon2")
    const darkUserIcon2 = $("#darkUserIcon2")
    const ordersIcon = $("#ordersIcon")
    const darkOrdersIcon = $("#darkOrdersIcon")
    const langForm = $("#langForm")
    const langText = $("#langText")
    const langIcon = $("#langIcon")
    const darkLangIcon = $("#darkLangIcon")
    const basketIcon = $("#basketIcon");
    const darkBasketIcon = $("#darkBasketIcon");
    const slider = $(".swiper");
    const screenWidth = $(window).width();
    const sliderBottom = slider.offset().top + slider.outerHeight() - 80;
    if ($(window).scrollTop() >= sliderBottom) {
        header.css('background-color', 'rgba(255, 255, 255, 0.8)')
        divider.removeClass("bg-white").addClass("bg-black");
        basketCount.css('color', 'white')
        navItems.each(item => function () {
            $(this).removeClass('text-white').addClass('text-black')
            if (!$(this).hasClass('non-hover')) {
                $(this).removeClass('hover:bg-hoverblue').addClass('hover:text-hoverblue')
            }
        });
        navActions.each(function () {
            $(this).removeClass('text-white').addClass('text-black')
        });
        navActionsText.each(function () {
            $(this).removeClass('text-white').addClass('text-black')
            $(this).removeClass('group-hover:text-white').addClass('group-hover:text-hoverblue')
        });
        toggleButton.css('color', 'black')
        mainLogo.css("display", "none");
        darkLogo.removeClass('hidden').addClass("inline");
        basketIcon.removeClass('inline').addClass("hidden");
        darkBasketIcon.removeClass('hidden').addClass("inline");
        langForm.removeClass('hover:bg-hoverblue').addClass('hover:text-hoverblue')
        langText.addClass('group-hover:text-hoverblue')
        userIcon.css('display', 'none')
        userIcon2.css('display', 'none')
        ordersIcon.css('display', 'none')
        langIcon.css('display', 'none')
        darkUserIcon.css('display', 'inline')
        darkUserIcon2.css('display', 'inline')
        darkOrdersIcon.css('display', 'inline')
        darkLangIcon.css('display', 'inline')
    } else {
        header.css('background-color', 'rgba(0,0,0,0.2)')
        divider.removeClass("bg-black").addClass("bg-white");
        basketCount.css('color', 'black')
        navItems.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
            if (!$(this).hasClass('non-hover')) {
                $(this).addClass('hover:bg-hoverblue').removeClass('hover:text-hoverblue')
            }
        });
        navActions.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
        });
        navActionsText.each(function () {
            $(this).removeClass('text-black').addClass('text-white')
            $(this).removeClass('group-hover:text-hoverblue').addClass('group-hover:text-white')
        });
        toggleButton.removeClass('text-black').addClass('text-white')
        mainLogo.css("display", "inline");
        darkLogo.removeClass('inline').addClass("hidden");
        basketIcon.removeClass('hidden').addClass("inline");
        darkBasketIcon.removeClass('inline').addClass("hidden");
        langForm.addClass('hover:bg-hoverblue').removeClass('hover:text-hoverblue')
        langText.removeClass('group-hover:text-hoverblue')
        userIcon.css('display', 'inline')
        userIcon2.css('display', 'inline')
        ordersIcon.css('display', 'inline')
        langIcon.css('display', 'inline')
        darkUserIcon.css('display', 'none')
        darkUserIcon2.css('display', 'none')
        darkLangIcon.css('display', 'none')
        darkOrdersIcon.css('display', 'none')
    }
});

