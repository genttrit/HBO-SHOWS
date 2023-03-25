export function Alert(message){
     const msg = document.getElementById('message-container');
     msg.setAttribute('class','alert alert-success visible message-container');
     msg.innerHTML = message;

     setTimeout(() => {
          msg.setAttribute('class', 'invisible');
        }, 3000);
}
