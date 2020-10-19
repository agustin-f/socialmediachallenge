'use strict';

let checkbox = document.getElementById('dark-mode');
let bodyEl = document.querySelector('body');
let modeTitleEl = document.getElementById('mode-title');

if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
    checkbox.setAttribute('checked',true);
}

checkbox.addEventListener('change', function(event){   
    if(this.checked){        
        bodyEl.classList.add('is-in-dark-mode');
        bodyEl.classList.remove('is-in-light-mode');
        modeTitleEl.innerText = "Dark mode";
    }else{
        bodyEl.classList.add('is-in-light-mode');
        bodyEl.classList.remove('is-in-dark-mode');  
        modeTitleEl.innerText = "White mode";
    }
});
