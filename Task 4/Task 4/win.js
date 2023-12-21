document.getElementById('navigateButton').addEventListener('click', function() {
    // Navigate to the new HTML page
    window.location.href = 'index.html';
});

function togglePopup(){
    document.getElementById("rules-popup").classList.toggle("active");
}