const database = firebase.database(); 
const auth = firebase.auth(); 

const inputs = document.querySelectorAll('input'); 
const send = document.querySelector('button'); 

var isSignUp = false; 
auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            if(isSignUp){
                let userD = {
                    id: user.uid,
                    name: inputs[0].value, 
                    phone: inputs[1].value, 
                    mail: inputs[2].value, 
                    password: inputs[3].value
                 }
                 database.ref('semana15/users/'+userD.id).set(userD).then(
                     ()=>{
                         window.location.href= '/pages/index.html'; 
                     }
                 ); 
            }else{
                window.location.href= '/pages/index.html'; 
            }
        }
    }
)
send.addEventListener('click',()=>{
    isSignUp = true; 
    auth.createUserWithEmailAndPassword(
        inputs[2].value, inputs[3].value
    ); 
}); 
