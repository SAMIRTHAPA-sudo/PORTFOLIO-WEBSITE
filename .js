document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // For demonstration, we'll just log the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can implement form submission here using fetch or XMLHttpRequest if needed
    alert('Thank you for your message!');
});
