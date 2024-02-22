//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;
//header nav tabs
const projView = document.querySelector('.proj-view');
const home = document.querySelector('.Home');
const project = document.querySelector('.project');
const stacks = document.querySelector('.stacks');
const contact = document.querySelector('.contact')

const secondDiv = document.getElementById('info');
const info = document.querySelector('.my-info');
const userProfile = document.querySelector('.userprofile');
const newDiv = document.createElement("div");
// secondDiv.prepend(newDiv);
const projdone = document.querySelector(".proj-done-section");
console.log(projdone.getBoundingClientRect())
const {x, y,top:topProject, height, width} = projdone.getBoundingClientRect();
const furtherInfo = document.querySelector('.futher-info');

const projectNav = document.querySelector('.project');
let el = 1;

const html = `<div class="proj-done-section ">
<h3>PROJECT</h3>

<div class="project-done">
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>
    <div>
        <p>this project entails: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quas distinctio pariatur corrupti voluptatem dolorem, 
            officia molestiae quisquam nemo fugit inventore nihil, sed nam aut, cupiditate quia dolor ipsa. Voluptates.</p>
    </div>

</div>
</div>
`


nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// const buttonToProj = document.querySelector('.proj-view');

// buttonToProj.addEventListener('click', function(){
  
//     info.classList.toggle('hidden');
//     userProfile.classList.toggle('hidden');
    
// })
//for the project nav
projectNav.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
        top:topProject,
        left:x,
        behavior:'smooth'
    })
})

home.addEventListener('click', function(e){
    const {top,x,y, width, height} = this.getBoundingClientRect();
    e.preventDefault();
    window.scrollTo({
        top,
        x,
        behavior:'smooth'
        
    })
})

stacks.addEventListener('click', function(e){
    e.preventDefault();
    const {top,x,y, width, height} = document.querySelector('.my-info').getBoundingClientRect();
    window.scrollTo({
        top,
        x,
        behavior:'smooth'
    })
})



contact.addEventListener('click', function(e){
    e.preventDefault();
    const {top,x,y, width, height} = document.querySelector('.contact-container').getBoundingClientRect();
    window.scrollTo({
        top,
        x,
        behavior:'smooth'
    })
})




  