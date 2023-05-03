function convertTemperature() {
    let celsius = document.getElementById("celsius-input").value;
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsius} &#8451; = ${fahrenheit.toFixed(2)} &#8457;`;
  }