// Cliente side validation

// Get elements for the form, need the actual form, the email
// and the div id to show the error.
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (event) => {
    let messages = []
    if (email.value.toLowerCase() !== email.value) {
        messages.push('Please enter your email address in lowercase letters.')
    }

    if (messages.length > 0) {
        event.preventDefault();
        errorElement.innerText = messages.join(', ');
        // Remove the message after 3 seconds
        setTimeout(() => {
            errorElement.remove();
        }, 3000);
      }
  });


