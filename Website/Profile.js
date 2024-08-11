document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('profile-form');
    const HomeButton = document.getElementById('Home-button');
    const saveButton = document.getElementById('save-button');

HomeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});

saveButton.addEventListener('click', function() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = false);
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    console.log("Profile saved!");
});
});
