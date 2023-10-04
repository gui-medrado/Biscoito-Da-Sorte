const screen1 = document.querySelector('.screen1') 
const screen2 = document.querySelector('.screen2')
const cookieNotOpened = document.querySelector('.cookieClosed')
const buttonOpenAnotherCookie = document.querySelector('#getAnotherCookie')
const sortText = document.querySelector('.sort')

const listArray = [
    'Somos capazes de fazer muito mais do que imaginamos!',
    'Nós somos como o clima: feitos de dias de chuva e de sol!',
    'Há ainda tanta coisa linda na vida para se descobrir.',
    'Abra os olhos e aventure-se nessa jornada chamada vida!',
    'Há tantas pessoas que torcem por você na vida.',
    'Siga sempre confiante do seu potencial!',
    'Não há a necessidade de caminhar rápido. Apenas siga caminhando.',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

//Navegação entre as telas
function navigateScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}


function handleOpenCookie () {
    navigateScreen()
    let indexSort = Math.round(Math.random() * 8)
    let textSelected = listArray[indexSort]
    sortText.innerText = textSelected
}
function handleGetAnotherCookie () {
    navigateScreen()
}

cookieNotOpened.addEventListener('click', handleOpenCookie)
cookieNotOpened.addEventListener('mouseover', function(event) {
    this.classList.add('shake')
})
cookieNotOpened.addEventListener('mouseleave', function(event) {
    this.classList.remove('shake')
})
buttonOpenAnotherCookie.addEventListener('click', handleGetAnotherCookie)
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleOpenCookie()
    }
});