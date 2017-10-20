window.onkeydown = function (e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 38:
            forme.style.marginTop = '100px';
            setTimeout(function(){forme.style.marginTop = '200px';}, 2000);
            break;
        default:
            break;
    }
}