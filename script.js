function convertTemperature() {
  const celsiusInput = document.getElementById('celsius-input').value;
  const resultElement = document.getElementById('result');

  // Check if input is empty
  if (celsiusInput.trim() === '') {
      resultElement.textContent = '⚠️ Please enter a valid temperature!';
      resultElement.style.color = 'red';
      return;
  }

  const celsius = parseFloat(celsiusInput);

  // Convert Celsius to Fahrenheit and Kelvin
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  // Display the result with styled output
  resultElement.style.color = '#333';
  resultElement.innerHTML = `
      ✅ <strong>${celsius.toFixed(2)} °C</strong> equals:<br>
      🌡️ <strong>${fahrenheit.toFixed(2)} °F</strong><br>
      🧊 <strong>${kelvin.toFixed(2)} K</strong>
  `;
}
