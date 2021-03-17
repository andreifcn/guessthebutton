function play() {
    if (generateButton() === 1) {
        console.log(generateButton());
        document.getElementById('buttons').innerHTML = '<img src="https://miro.medium.com/max/544/0*jOcudO4xXxq-PhDF"><h1>You won!</h1>';
    } else {
        console.log(generateButton());
        document.getElementById('buttons').innerHTML = '<img src="https://i.pinimg.com/236x/1b/73/2f/1b732fe56daf2be742f80a5132610a22.jpg"><h1>Wrong Button!</h1>';
    }
    document.getElementById('index').innerHTML = '<h1><strong>Try your luck again!</strong></h1>';
}