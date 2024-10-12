function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    lightbox.style.display = "block"; // Show the lightbox
    lightboxImg.src = element.querySelector('img').src; // Set lightbox image source
    caption.innerHTML = element.querySelector('img').getAttribute('data-detail'); // Set caption text
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none"; // Hide the lightbox
}
// Function to open the lightbox
function openLightbox(element) {
    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDetails = document.getElementById('lightbox-details');

    // Set the source of the lightbox image to the clicked image's source
    lightboxImg.src = element.src;
    
    // Get the character details from the data-detail attribute
    lightboxDetails.innerHTML = element.getAttribute('data-detail');

    // Display the lightbox
    lightbox.style.display = 'flex'; // Use 'flex' to center content
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Optional: Close the lightbox when clicking outside the image
const lightbox = document.getElementById('lightbox');
lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox when clicking outside the image
document.getElementById("lightbox").addEventListener("click", function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});
