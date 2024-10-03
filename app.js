let iconContainer=document.getElementById('icon-container');
let openIcon=document.getElementById('open-icon');
let closeIcon=document.getElementById('close-icon');
let navLinkElement=document.querySelectorAll('.nav-item a');
let navLinks=document.querySelector('.nav-items');

iconContainer.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    openIcon.style.display = openIcon.style.display === 'none' ? 'block':'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
});

navLinkElement.forEach((link)=>{
    link.addEventListener('click',()=>{
        navLinks.classList.remove('active');
        openIcon.style.display='block';
        closeIcon.style.display='none';
    });
});
