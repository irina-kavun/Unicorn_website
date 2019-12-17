// dropdown menu for desctop
const menuItemDropdown = document.querySelector('.menu-item-dropdown');
const dropdown = document.querySelector('.dropdown');


menuItemDropdown.addEventListener('click', () => {
    dropdown.classList.contains('dropdown-active')
        ? dropdown.classList.remove('dropdown-active')
        : dropdown.classList.add('dropdown-active');
});


// sidenavbar menu for mobile
const barIcon = document.querySelector('.icon-container');
const closeIcon = document.querySelector('.btn-close');
const pageBackground = document.querySelector('.background-title-page');


barIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.add('opened-navbar');
    pageBackground.classList.add('background-title-page-appear');
});

closeIcon.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('opened-navbar');
    pageBackground.classList.remove('background-title-page-appear')
});


// Custom Select
$(".custom-select").each(function() {
    let classes = $(this).attr("class");
    let template =  `<div class="${classes}">`;
    template += `<span class="custom-select-trigger">Ru</span>`;
    template += `<div class="custom-options">`;
    $(this).find("option").each(function() {
        template += `<span class="custom-option  ${$(this).attr("class")}" data-value="${$(this).attr("value")}">${$(this).html()}</span>`;
    });
    template += `</div></div>`;

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});