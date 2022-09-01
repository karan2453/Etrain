// counnter function starts here
jQuery(document).ready(function($){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});



// collapsing navbar is here

function showmenu()
{
    var x = document.getElementById('myUL');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}