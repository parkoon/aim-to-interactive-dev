// Movement Animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')

// Items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

// Moving Animation Event
container.addEventListener('mousemove', e => {

    let xAsis = (window.innerWidth / 2 - e.pageX) / 25
    let yAsis = (window.innerHeight / 2 - e.pageY) / 25


    card.style.transform = `rotateY(${xAsis}deg) rotateX(${yAsis}deg)`

})

// Animate In
container.addEventListener('mouseenter', e => {
    
    // 기본 애니매이션 동작에는 트랜지션 효과를 주고싶지 않다.
    card.style.transition = 'none'

    // Popout
    title.style.transform = 'translateZ(150px)'
    sneaker.style.transform = 'translateZ(200px) rotateZ(-20deg)'
    description.style.transform = 'translateZ(125px)'
    sizes.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
})

// Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateX(0deg) rotateY(0deg)`

    // Popback
    title.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0) rotateZ(0)'
    description.style.transform = 'translateZ(0)'
    sizes.style.transform = 'translateZ(0)'
    purchase.style.transform = 'translateZ(0)'
})