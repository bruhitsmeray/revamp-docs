$(document).on('click','.blog-filter li', function(){
    $(this).addClass('blog-filter-active').siblings().removeClass('blog-filter-active')
});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.post').show('1000');
        } else {
            $('.post').not('.' + value).hide('1000');
            $('.post').filter('.' + value).show('1000');
        }
    });
});