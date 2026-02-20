const buttons = document.querySelectorAll('.nav_button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
    });
});
