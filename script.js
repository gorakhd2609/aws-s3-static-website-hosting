document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart! Redirecting to checkout...');
            // Add redirect logic if needed
        });
    });
});