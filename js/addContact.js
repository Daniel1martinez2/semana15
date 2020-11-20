const database = firebase.database(); 
const auth = firebase.auth(); 

const inputs = document.querySelectorAll('input'); 
const addNew = document.querySelector('button'); 

var currentUserId; 

auth.onAuthStateChanged(
    (user)=>{
        if(user === null){
            window.location.href= '/pages/signUp.html';
        }else{
            currentUserId = user.uid;
            addNew.addEventListener('click',()=>{
                let reference = database.ref('semana15/contacts/'+currentUserId).push(); 
                let contact ={
                    userId: currentUserId,
                    id: reference.key,
                    name: inputs[0].value,
                    phone: inputs[1].value 
                }
                reference.set(contact).then(
                    ()=>{
                        window.location.href= '/pages/index.html'; 
                    }
                ); 
            }); 
            database.ref('semana15/users/'+user.uid).once(
                'value', 
                (data)=>{
                    let userD = data.val(); 
                    console.log(userD.name); 
    
                }
            );
        }
    
    }
); 