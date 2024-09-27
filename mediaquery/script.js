const button = document.getElementById('actionButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.innerText = 'Button clicked! Enjoy exploring the interactive page!';
});
