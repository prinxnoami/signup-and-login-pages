const openEye= document.querySelector('.loginPageEye')
const closeEye= document.querySelector('.loginPageEyeSlash')
const passwordInput=document.querySelector('.passwordInput')


openEye.addEventListener('click', ()=>{
    closeEye.style.display='block'
    passwordInput.type='text'
    openEye.style.display='none'
})
closeEye.addEventListener('click', ()=>{
    openEye.style.display='block'
    passwordInput.type='password'
    closeEye.style.display='none'
})