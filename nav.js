function toggleMenu (){
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', ()=>{
        navbar.classList.toggle('show-nav');
    })
}

toggleMenu();

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 25){
        navbar.classList.add('nav-anime');
    }else{
        navbar.classList.remove('nav-anime');
    }
    
});
