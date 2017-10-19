function Bouton() {
    var ftSize = document.getElementById('Bouton').style.fontSize;
    var test = '20px';
    if (ftSize == test) {
        document.getElementById('Bouton').style.fontSize = '50px';
    }
    else {
        document.getElementById('Bouton').style.fontSize = '20px';
    }
}