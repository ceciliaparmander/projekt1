document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Tack för ditt meddelande, ${name}! Vi kommer att kontakta dig via ${email} snart.`);
});
