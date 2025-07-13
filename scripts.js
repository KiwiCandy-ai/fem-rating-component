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
text.textContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
container.appendChild(text)

const numbers = document.createElement('div')
numbers.classList.add('numbers')
container.appendChild(numbers)


for (let i = 1; i < 6; i++) {
    const numIcon = document.createElement('button')
    numIcon.textContent = `${i}`
    numIcon.classList.add('num')
    numbers.appendChild(numIcon)
    numIcon.addEventListener('click', selectNum) 
    
}

const submit = document.createElement('button')
submit.textContent = 'SUBMIT'
submit.classList.add('submit')
submit.addEventListener('click', submitResult)
container.appendChild(submit)

let result = 0

function selectNum(e) {
    const numIcon = document.querySelectorAll('.selected')
numIcon.forEach(function (elem) {
    elem.classList.remove('selected')
});
const targetElem = e.target
        targetElem.classList.add('selected')
       result = targetElem.textContent
        return result
    }

function submitResult() {
    const numIcon = document.querySelector('.selected')
    console.log(numIcon)
    if (numIcon.classList.contains('selected')) {
        let child = container.lastElementChild 
            while (child) {
                container.removeChild(child)
                child = container.lastElementChild
            } 
            const thanks = document.createElement('img')
            thanks.classList.add('thanks')
            thanks.src = 'https://raw.githubusercontent.com/KiwiCandy-ai/fem-rating-component/36b9fbd8dff5611971fc385b19812a2d61508ac8/images/illustration-thank-you.svg'
            container.appendChild(thanks)
            const displayResult = document.createElement('div')
            displayResult.classList.add('result')
            displayResult.textContent = `You selected ${result} out of 5`
            container.appendChild(displayResult)
            const heading = document.createElement('div')
            heading.textContent = 'Thank You!'
            heading.classList.add('heading')
            container.appendChild(heading)
            const para = document.createElement('div')
            para.textContent = 'We appreciate you taking the time to give us a rating. If you ever need more support, dont hesitate to get in touch!'
            para.classList.add('text')
            container.appendChild(para)
            container.classList.add('second')
        } else {
                
            } 
        }
    
