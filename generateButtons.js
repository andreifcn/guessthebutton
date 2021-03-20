
buttonNrs = null; // number of button items will be used to set win chance

function generateButtons() {

    buttonNrs = document.getElementById('button-nrs').value;

    document.getElementById('buttons').innerHTML = '';

    for (let i = 0; i < buttonNrs; i++) {
        let playButton = document.createElement("button");
        playButton.style.width = "90px";
        playButton.style.height = "90px";
        playButton.textContent = "PLAY!";
        playButton.setAttribute('onclick', 'play()');
        document.getElementById('buttons').appendChild(playButton);
    }
}