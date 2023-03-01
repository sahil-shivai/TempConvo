function convertCTK(){
    var c = document.getElementById('in1').value;
    var k = Number(c) + 273.15;
    document.getElementById('ans').innerHTML = k +" Kelvin";
}
function convertKTC(){
    var k = document.getElementById('in2').value;
    var c = Number(k) - 273.15;
    document.getElementById('ans2').innerHTML = c +" Celcius";
}