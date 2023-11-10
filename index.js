//TEMPERATURE CONVERSION JAVASCRIPT LANGUAGE CODE

const textbox = document.getElementById("textbox");
const toCelcius = document.getElementById("tocel");
const toFarenheit = document.getElementById("tofah");

const result = document.getElementById("result");

let temp;

function convert()
{
    if(toCelcius.checked)
    {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        temp = temp.toFixed(2);
        result.textContent = temp + "°C";
    }
    else if(toFarenheit.checked)
    {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        temp = temp.toFixed(2);
        result.textContent = temp + "°F";
    }
    else{
        result.textContent = "Please enter a value";
    }
}