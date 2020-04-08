
function openbackpaperdiv(selbackpaper) {
    var selbackpaper = document.getElementById(selbackpaper);

    if (selbackpaper.value == "yes") {
        document.getElementById('backpapertable').style.display = 'block';
        document.getElementById('nobackpaper').style.display = 'none';
    }
    else {
        document.getElementById('nobackpaper').style.display = 'block';
        document.getElementById('backpapertable').style.display = 'none';
    }
}