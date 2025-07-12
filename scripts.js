const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

const credit = document.getElementsByClassName('attribution')

const star = document.createElement('div')
star.classList.add('star')
container.appendChild(star)

const starIcon = document.createElement('img')
starIcon.classList.add('starIcon')
starIcon.src = 'https://raw.githubusercontent.com/KiwiCandy-ai/fem-rating-component/5ecefb0e248aa51b26b425400998644849487203/images/icon-star.svg'
star.appendChild(starIcon)

const heading = document.createElement('div')
heading.classList.add('heading')
heading.textContent = 'How did we do?'
container.appendChild(heading)

const text = document.createElement('div')
text.classList.add('text')
text.textContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.'
container.appendChild(text)

const numbers = document.createElement('div')
numbers.classList.add('numbers')
container.appendChild(numbers)


for (let i = 1; i < 6; i++) {
    const numIcon = document.createElement('button')
    numIcon.textContent = `${i}`
    numIcon.classList.add('num')
    numbers.appendChild(numIcon)
    numIcon.addEventListener('click', function(e) {
        const targetElem = e.target
        targetElem.classList.add('selected')
        
    })
}

const submit = document.createElement('button')
submit.textContent = 'SUBMIT'
submit.classList.add('submit')
container.appendChild(submit)


