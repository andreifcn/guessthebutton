function play() {

    if (generateButtonID() === 1) {
        document.getElementById('buttons').innerHTML = '<h1>You won!</h1>';
    } else {
        document.getElementById('buttons').innerHTML = '<h1>Wrong Button!</h1>';
    }

    document.getElementById('index').innerHTML = '<h1><strong>Try your luck again!</strong></h1>';
}