document.getElementById('language-selection').style.display = 'block';

function selectLanguage(language) {
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('message').style.display = 'flex';

    var questionText = '';
    var musicSrc = '';
    var imageSrc = '';

    if (language === 'en') {
        questionText = 'Whoever moves first is gay';
        musicSrc = 'Static.mp3'; // Path to English background song
        imageSrc = 'wyg.jpeg'; // Path to English image
    } else if (language === 'es') {
        questionText = 'El que se mueva primero es gay';
        musicSrc = 'Static.mp3'; // Path to Spanish background song
        imageSrc = 'wyg.jpeg'; // Path to Spanish image
    }

    document.getElementById('question').innerText = questionText;
    document.getElementById('background-music').src = musicSrc;
    document.getElementById('background-music').play();
    document.getElementById('image').src = imageSrc;
}