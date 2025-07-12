const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const credit = document.getElementsByClassName('attribution')

const star = document.createElement('div')
star.classList.add('star')
container.appendChild(star)

const starIcon = document.createElement('img')
starIcon.classList.add('starIcon')
starIcon.src = 'images.icon-star.svg'
star.appendChild(starIcon)