function width_based_on_position(selectPosition, parentHeight, minWidth=0.5, maxWidth=1){
    var parentMiddle = parentHeight / 2;
    var e = (-minWidth) / parentMiddle**2 * (selectPosition - parentMiddle)**2 + maxWidth; // f(x) = y = -0.5/X^2 * (V-X)^2 + 1
    return e;
} 

console.log(width_based_on_position(400, 800));


var g = document.querySelector('.quiz-wrap');
console.log(g.clientHeight + ' // ' + g.clientWidth);





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