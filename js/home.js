const database = firebase.database(); 
const auth = firebase.auth(); 
const wellcome = document.querySelector('h3'); 
const logOut = document.querySelector('.logOut'); 
const addContact = document.querySelector('.add'); 
const contactsDIv = document.querySelector('.contacts'); 
var currentUserId; 
logOut.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href= '/pages/signUp.html'; 
        }
    );
}); 

addContact.addEventListener('click',()=>{
    window.location.href= '/pages/addContact.html';
}); 


auth.onAuthStateChanged(
    (user)=>{
        if(user === null){
            window.location.href= '/pages/signUp.html';
        }else{
            console.log(user.uid); 
            currentUserId = user.uid; 
            database.ref('semana15/users/'+user.uid).once(
                'value', 
                (data)=>{
                    let userD = data.val(); 
                    console.log(userD.name); 
                    wellcome.innerText = 'Wellcome '+userD.name; 
                    //databsae ref contacts
                    database.ref('semana15/contacts/'+user.uid).on('value', data=>{
                       
                        contactsDIv.innerHTML = ''; 
                        data.forEach(
                            contact => {
                                console.log(contact.val());
                                console.log(contact.val().name); 

                                let contacCurrent = new ContactComponent(contact.val()); 
                                contactsDIv.appendChild(contacCurrent.render()); 

                        });
                    }); 
    
                }
            );
        }
    
    }
); 

