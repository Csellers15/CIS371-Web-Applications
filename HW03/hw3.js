const el = document.getElementById('numSlider');
el.addEventListener('change', sliderListener);

function sliderListener(ev) {
    alert('Slider value is ' + ev.target.value);
}

const elOut = document.getElementById('usercount');
elOut.innerText = ev.target.value;
