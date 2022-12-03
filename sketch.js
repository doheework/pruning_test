const range = document.querySelector('.range');
const root  = document.querySelector(':root');
const output = document.querySelector('#value');
output.innerHTML = slider.value;

range.addEventListener('input', function() {
    root.style.setProperty('--font-pruning', this.value);
    output.innerHTML = this.value;
});




