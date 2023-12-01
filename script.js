const openEye1= document.querySelector('.fa-eye1');
const closeEye1= document.querySelector('.fa-eye-slash1');
const passwordInput= document.querySelector('.passwordInput')

const closeEye2= document.querySelector('.fa-eye-slash2');
const openEye2= document.querySelector('.fa-eye2');
const CpasswordInput= document.querySelector('.CpasswordInput')




openEye1.addEventListener('click',()=>{
    closeEye1.style.display='block'
    passwordInput.type='text'
    openEye1.style.display='none'
})
closeEye1.addEventListener('click',()=>{
    openEye1.style.display='block'
    passwordInput.type='password'
    closeEye1.style.display='none'
})

openEye2.addEventListener('click',()=>{
    closeEye2.style.display='block'
    CpasswordInput.type='text'
    openEye2.style.display='none'
})
closeEye2.addEventListener('click',()=>{
    openEye2.style.display='block'
    CpasswordInput.type='password'
    closeEye2.style.display='none'
})



