function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const validationMessage = document.getElementById('validationMessage');

    if (!isValidInput(inputText)) {
        validationMessage.textContent = alert('No se aceptarán mayúsculas ni caracteres especiales.');
        return;
    } else {
        validationMessage.textContent = '';
    }

    const encodedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('outputText').value = encodedText;
    document.getElementById('inputText').value = ''; // Limpia el campo de entrada
}

function decryptText() {
    const inputText = document.getElementById('outputText').value;
    const validationMessage = document.getElementById('validationMessage');

    if (!isValidInput(inputText)) {
        validationMessage.textContent = 'No se aceptarán mayúsculas ni caracteres especiales.';
        return;
    } else {
        validationMessage.textContent = '';
    }

    const decodedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('outputText').value = decodedText;
}

function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
