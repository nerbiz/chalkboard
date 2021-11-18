var contentField = document.getElementById('content');
var storeTimeout = null;

// Make sure the entry exists in localStorage
var currentValue = localStorage.fieldContents;
if (currentValue === undefined) {
    localStorage.fieldContents = '';
}

// Restore the previous value on pageload
contentField.value = localStorage.fieldContents;

// Store the value while typing
contentField.addEventListener('keydown', function(event) {
    // Delay before storing the value
    clearTimeout(storeTimeout);
    storeTimeout = setTimeout(function() {
        localStorage.fieldContents = contentField.value;
    }, 500);
});
