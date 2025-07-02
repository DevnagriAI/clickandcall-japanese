document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-enhanced');
    if (!form) return;

    // Handle form submission
    form.addEventListener('submit', function(e) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Reset form and button state
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
        // Redirect to contact-us page after a short delay
        setTimeout(() => {
            window.location.href = 'contact-us';
        }, 500);
        
        // The form will submit normally to the iframe
        // We don't need to prevent default or handle the actual submission
        // as the form's action and method will handle it
    });
    
    // Handle iframe load event to detect when the form submission is complete
    const iframe = document.getElementById('hidden-iframe');
    if (iframe) {
        iframe.onload = function() {
            console.log('Form submitted successfully');
            // The success message is already shown in the form submit handler
        };
    }
});
