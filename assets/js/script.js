$(document).ready(() => {

    $('.menu').click(toggleNav)
    $('#close').click(toggleNav)

    function toggleNav() {
        $('nav').toggleClass('slide')
        $('html, body').css({
            overflow: 'visible'
        });
    }

    var tabIndex = 0;
    showTab(1)
    $('.tabs li a').each(function (index, tab){
        $(tab).click((e) => {
            showTab(index+1)
        })
    })

    function showTab(n) {

        $('.tabs li a').each(function (index, tab){ $(this).removeClass('active') })
        $('.tab-content > li').each(function (index, tab){ $(this).hide() })

        $('.tabs li a').eq(n-1).addClass('active')
        if(n-1 == 0) {
            var content = '';
            $('.tab-content > li:nth-of-type(1)').html(` `)
            $('.tab-content > li ul').each(function (index, value) {
                if(index != -1) {
                    content += `${$(this).html()}`
                }
            })
            $('.tab-content > li:nth-of-type(1)').html(`<ul>${content}</ul>`).fadeIn()
        } else {
            $('.tab-content > li').eq(n-1).fadeIn()
        }
    }
})