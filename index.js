
document.addEventListener("DOMContentLoaded", ()=> {
    var redRange=document.querySelector('#redRange');
    var redOutput=document.querySelector('#redOutput');

    var greenRange=document.querySelector('#greenRange');
    var greenOutput=document.querySelector('#greenOutput');

    var blueRange=document.querySelector('#blueRange');
    var blueOutput=document.querySelector('#blueOutput');
    var colorOutput=document.querySelector('#colorOutput');

    redOutput.value=255;
    greenOutput.value=255;
    blueOutput.value=255;
    
    function changeBg(red, green, blue) {
        document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";
        redOutput.style.backgroundColor="rgb("+red+","+green+","+blue+")";
        greenOutput.style.backgroundColor="rgb("+red+","+green+","+blue+")";
        blueOutput.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    };
    function changeTxt(red, green, blue) {
        var invRed=255-parseInt(red);
        var invGreen=255-parseInt(green);
        var invBlue=255-parseInt(blue);
        redOutput.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        greenOutput.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        blueOutput.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        text1.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        text2.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        text3.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
        colorOutput.style.color="rgb("+invRed+","+invGreen+","+invBlue+")";
    };

    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
      };

    function changeAll(red, green, blue) {
        colorOutput.innerHTML=rgbToHex(red, green, blue);
        changeBg(red, green, blue);
        changeTxt(red, green, blue);
    };

    redRange.addEventListener("input", ()=> {
        redOutput.value=redRange.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })

    greenRange.addEventListener("input", ()=> {
        greenOutput.value=greenRange.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })

    blueRange.addEventListener("input", ()=> {
        blueOutput.value=blueRange.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })

    redOutput.addEventListener("input", () => {
        redRange.value=redOutput.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })

    greenOutput.addEventListener("input", () => {
        greenRange.value=greenOutput.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })

    blueOutput.addEventListener("input", () => {
        blueRange.value=blueOutput.value;
        changeAll(redRange.value, greenRange.value, blueRange.value);
    })
})
