function generateButtonID() {

    if (buttonNrs <= 1) {       // chance to win is equal to number of buttons
        return Math.floor(Math.random() * (Math.floor(buttonNrs) + 1));
    } else {
        return Math.floor(Math.random() * Math.floor(buttonNrs));
    }
}

