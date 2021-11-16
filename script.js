var contentField = document.getElementById('content');
var storeTimeout = null;

function readValue()
{
    // Make sure the entry exists in localStorage
    var currentValue = localStorage.fieldContents;
    if (currentValue === undefined) {
        localStorage.fieldContents = '';
    }

    return localStorage.fieldContents;
}

function storeValue(value)
{
    localStorage.fieldContents = value;
}

// Restore the previous value on pageload
contentField.value = readValue();

// Store the value while typing
contentField.addEventListener('keydown', function(event) {
    // Delay before storing the value
    clearTimeout(storeTimeout);
    storeTimeout = setTimeout(function() {
        storeValue(contentField.value);
    }, 500);
});
