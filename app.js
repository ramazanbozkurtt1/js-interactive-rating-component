const rateCont = document.querySelector('.rate-container')
const submitBtn = document.querySelector('.submit')
const tyCont = document.querySelector('.ty-container')
submitBtn.addEventListener('click', () => {
    rateCont.style.display = 'none'
    tyCont.style.display = 'flex'
    tyCont.style.flexDirection = 'column'
} )
const rate = document.querySelectorAll('#rate')
const span = document.querySelector('#selected-num')

rate.forEach((btn) => {
    btn.addEventListener('click', () =>{
        span.innerText = btn.textContent
    })
    
});



