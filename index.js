const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach(item => item.addEventListener('wheel', inputWheel));

function inputWheel(event) {
  event.preventDefault();

  // let step;
  // if (this.getAttribute('step')) {
  //   step = +this.getAttribute('step');
  // } else {
  //   step = 1;
  // }

  const step = this.getAttribute('step') ? +this.getAttribute('step') : 1; // короткая тернарная запись

  // if (event.deltaY > 0) {
  //   this.value = (+this.value) + 1;
  // } else {
  //   this.value = (+this.value) - 1;
  // }

  event.deltaY > 0 ? this.value = (+this.value + step) : this.value = (+this.value - step);
}