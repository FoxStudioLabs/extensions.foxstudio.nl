"use strict"; // Use strict JavaScript mode to prevent errors.
$(document).ready(function() {
    console.log("Page loaded in " + (performance.now() / 1000).toFixed(2) + " seconds."); // Log the page load time in seconds.

    document.querySelectorAll('.data-extensionid').forEach(item => {
        item.addEventListener('click', event => {
            let extensionId = item.getAttribute('data-extensionid');
            let url = '/extension/' + extensionId;
            window.location.href = url;
        });
    });

    function openExtension(extensionId) {
        let url = '/extension/' + extensionId;
        window.location.href = url;
    }
});