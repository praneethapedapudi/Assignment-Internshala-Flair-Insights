const themeToggle = document.getElementById('themeToggle');
const themeStylesheet = document.getElementById('themeStylesheet');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        themeStylesheet.href = 'styles-dark.css';
    } else {
        themeStylesheet.href = 'styles-light.css';
    }
});
