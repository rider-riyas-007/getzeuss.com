
    document.querySelector('.chat-button').addEventListener('click', function() {
        document.getElementById('floatingForm').style.display = 'block';
    });

    document.querySelector('.message-button').addEventListener('click', function() {
        document.getElementById('floatingForm').style.display = 'block';
    });

    // Optional: Add a close button to the form
    document.querySelector('.floating-form form').insertAdjacentHTML('beforeend', '<button type="button" id="closeForm">Close</button>');
    document.getElementById('closeForm').addEventListener('click', function() {
        document.getElementById('floatingForm').style.display = 'none';
    });
    
    document.getElementById('hamburgerMenu').addEventListener('click', function() {
        this.classList.toggle('active');
    });

    document.getElementById('hamburgerMenu').addEventListener('click', function() {
        document.getElementById('overlay').classList.toggle('active');
        document.getElementById('navMenu').classList.toggle('active');
    });