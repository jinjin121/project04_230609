$(function () {
    // $(window).on('scroll', function () {
    //     let sct = $(window).scrollTop();
    //     sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    // });
    var option = {
        anchors: ['01', '02', '03'],
        afterRender: function () {
            setTimeout(function () { $('.section').eq(0).addClass('on') }, 10)
        },
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('.slideBtn ul li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');

            if (index == 2) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }

        },

    }
    $('.main_full').fullpage(option);


})