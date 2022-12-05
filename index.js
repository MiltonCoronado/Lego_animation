const modal = document.querySelector('.modal');
const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
const closeButton = document.querySelector('.modal__content--close')

const actionOpen =  () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');//al llamar a clastList ya se sabe que se va a hacer algo con clases, no es necesario el punto (.)
};

const actionClose =  () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');//al llamar a clastList ya se sabe que se va a hacer algo con clases, no es necesario el punto (.)
};

buttonOne.addEventListener('click', actionOpen);
buttonTwo.addEventListener('click', actionOpen);
buttonThree.addEventListener('click', actionOpen);
closeButton.addEventListener('click', actionClose);

