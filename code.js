const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');
const colorValue = document.getElementById('colorValue');

colorPicker.addEventListener('input', (event) => {
  const color = event.target.value;
  colorPreview.style.backgroundColor = color;
  colorValue.textContent = color;
});

