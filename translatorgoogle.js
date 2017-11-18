(function() {
    var mylang = “id”, // Your website language
        anchor = document.getElementById(‘translate-me’);
    anchor.onclick = function() {
        window.open(‘http://translate.google.com/translate?u=’ + encodeURIComponent(location.href) + ‘&langpair=’ + mylang + ‘%7C’ + document.getElementById(‘translate-language’).value + ‘&hl=en’);
        return false;
    };
})();