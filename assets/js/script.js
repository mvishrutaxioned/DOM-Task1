$(document).ready(() => {

    $('.menu').click(() => $('nav').toggleClass('slide'))
    $('#close').click(() => $('nav').toggleClass('slide'))

    var tabIndex = 1;
    $('.tabs li a').each(function (index, tab){
        $(tab).click((e) => {
            changeTab(e, index+1)
        })
    })

    function changeTab(e, n) {
        e.preventDefault();
        showTab(tabIndex = n)
    }
    
    function showTab(n) {
        
        $('.tabs li a').each(function (index, tab){ $(this).removeClass('active') })
        $('.tab-content > li').each(function (index, tab){ $(this).hide() })

        $('.tabs li a').eq(n-1).addClass('active')
        $('.tab-content > li').eq(n-1).fadeIn()

    }
})