const contentField = document.querySelector('#content');
let storeTimeout = null;

function readValue()
{
    // Make sure the entry exists in localStorage
    const currentValue = localStorage.fieldContents;
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
contentField.addEventListener('keydown', event => {
    // Delay before storing the value
    clearTimeout(storeTimeout);
    storeTimeout = setTimeout(storeValue, 500, contentField.value);
});
