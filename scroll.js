document.querySelector('body').style.backgroundColor = '#111418'
document.querySelector('body').style.color = '#fff'

$('a.navigation_link').on('click', function (event){
    var $anchor = $(this)
    $ ('html, body')
        .stop()
        .animate({
                scrollTop: $anchor.attr('href').offset().top,

            },
            {
                duration:2000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeInOutCubic',
                },
            }
        )
    event.preventDefault()
})


