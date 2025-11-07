const emailField = document.querySelector('.email');
const form = document.querySelector('.form');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

// Disable browser's default validation
form.setAttribute('novalidate', '');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailField.value === '' || emailField.value == null) {
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';
    } else if (!emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        errorIcon.style.display = 'none';
        form.submit();
    }
})