document.querySelector(document).addEventListener('ready', () => {
    document.querySelector('.field').addEventListener('focus', () => {
        document.querySelector('body').classList.add('is-focus');
    });
    
    document.querySelector('.field').addEventListener('blur', () => {
        document.querySelector('body').classList.remove('is-focus is-type');
    });
    
    document.querySelector('.field').addEventListener('keydown', (event) => {
        document.querySelector('body').classList.add('is-type');
        if((event.which === 8) && document.querySelector(this).value === '') {
            document.querySelector('body').classList.remove('is-type');
        }
    });
});
