document.body.style.height = '100vh';

var title = document.getElementById('lyrics');
title.style.color = 'yellow';
title.style.top = 80 + "px";
title.style.left = 1 + "vw";

var singer = document.getElementById('singer');
singer.style.color = 'black';
singer.style.top = 90 + "px";
singer.style.left = 1 + "vw";


var btnOne = document.getElementById('one');
btnOne.style.height = '5vh';
btnOne.style.width = '10vw';
btnOne.style.background = 'skyblue';
btnOne.style.position = 'absolute';
btnOne.style.top = 120 + "px";
btnOne.style.left = 1 + "vw";

var display = document.getElementById('lyricsBody');
display.style.height = '50vw';
display.style.width = '80vw';
display.style.position = 'absolute';
display.style.top = 200 + "px";
display.style.left = 40 + "px";
display.style.color = 'yellow';
display.style.textAlign = 'center';




btnOne.addEventListener('click', function(event) {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            display.innerHTML = " ";
            var lyricsJSON = JSON.parse(ajax.responseText);
            display.innerHTML += '<p>' + lyricsJSON.lyrics.replace(/(?:\r\n|\r|\n)/g, '</p><br>');


        }

    }
    ajax.open('GET', 'https://api.lyrics.ovh/v1/coldplay/yellow', true);
    ajax.send();
});

$('#pageContainer').click(function() {
    $('#pageContainer').ripples({
        perturbance: 0.003,
    });

})