class ContactComponent{

    constructor(contact){
        this.contact = contact;
       
    }

    database = firebase.database(); 

    render=()=>{
        
        const container = document.createElement('div'); 
        container.classList.add('contact'); 
        const name = document.createElement('h5'); 
        const number = document.createElement('h6'); 
        const deleteContact = document.createElement('button'); 
        name.innerText = this.contact.name; 
        number.innerText = this.contact.phone; 
        deleteContact.innerText = 'Delete 🔪'; 
        deleteContact.classList.add('btn-primary'); 
        deleteContact.classList.add('btn'); 
        
        deleteContact.addEventListener('click',()=>{
            console.log(this.contact.userId); 
            let reference = database.ref('semana15/contacts/'+this.contact.userId+'/'+this.contact.id).set(null); 
        })

        container.appendChild(name); 
        container.appendChild(number); 
        name.appendChild(deleteContact); 
        return container; 

    }
}