function copyToClipboard(button) {
    const codeBlock = button.parentNode.parentNode.nextSibling;
    const codeText = codeBlock.innerText || codeBlock.textContent;
    navigator.clipboard.writeText(codeText).then(function() {
        const feedback = button.nextSibling.nextSibling;
        feedback.style.display = 'block';
        setTimeout(function() {
            feedback.style.display = 'none';
        }, 1000);
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}