const database = firebase.database(); 
const auth = firebase.auth(); 
const inputs = document.querySelectorAll('input'); 
const button = document.querySelector('button'); 

button.addEventListener('click',()=>{
    auth.signInWithEmailAndPassword(inputs[0].value,inputs[1].value).then(
        (data)=>{
            window.location.href= '/pages/index.html'; 
        }
    ).catch(
        (error)=>{
            inputs[0].style.backgroundColor = ' rgb(255, 88, 88)'; 
        }
    ); 
}); 