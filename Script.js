window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorbox = document.getElementbyId("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorbox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, color, pickerElements) {
    let pickerLen = pickerElements. length;
    for (let i = 0; i < pickerElements.length; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setBoxBGColor(element, rgb.red.value, rgb.green.value, rgb.blue.value);
            setdisplayValue(red, green, blue)
        });
    }
}

function setElementBGColor(colorBox, red, green, blue) {
    let rgbVAL = [red, green, blue].join (',');
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setdisplayValue(red, green, blue) {
    let redVal = document.getElementByID("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal")

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}
