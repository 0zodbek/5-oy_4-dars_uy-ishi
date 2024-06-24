let winter = document.getElementById("winter");
let body = document.querySelector('body')
// console.log(winter);
let header = document.querySelector("header");
// console.log(header);
let image = document.getElementById("rasm");
// console.log(image);
let btn = document.getElementsByName("button");
let headerContainer = document.getElementsByClassName("headercontainer");
let spring = document.getElementById("spring");
let summer = document.getElementById("summer");
let autumn = document.getElementById("autumn");
let mainContainer = document.getElementsByClassName("maincontainer");
let imgWrapper = document.getElementById("imageWrapper");
let del = document.getElementById('detate')
let grad = document.getElementById('grad')
let mainWrapper = document.getElementById('mainWrapper')
// let gap = body.innerHTML;
// let imageWrapper = document.getElementsByClassName('img');
// headerContainer.style.display = 'flex';
// headerContainer.style = 'SpaceBetween'
winter.addEventListener("click", function () {
  imgWrapper.style.display = "block";
  winter.style.backgroundColor = "transparent";
  winter.style.color = '#fff';
  summer.style.backgroundColor = "white";
  summer.style.color = 'black';
  winter.style.border = '1px solid white';
  spring.style.backgroundColor = '#fff';
  spring.style.transition = 'all 1s ease';
  spring.style.color = '#000';
  autumn.style.backgroundColor = '#fff';
  autumn.style.transition = 'all 1s ease';
  autumn.style.color = '#000';
  summer.style.transition = 'all 1s ease';
  summer.style.color = '#000'
  image.setAttribute("src", "./images/winterImage.jpg");
  del.style.transition = 'all 1s ease';
  del.style.color = '#000';
  del.style.backgroundColor = '#fff';
  body.style.backgroundColor = 'white'
});
spring.addEventListener("click", function () {
  spring.style.transformTranslate = '0,50px'
    spring.style.transition = 'all 1s ease'
    imgWrapper.style.display = "block";
    spring.style.backgroundColor = "transparent";
    spring.style.color = '#fff';
    spring.style.border = '1px solid white'
    imgWrapper.style.transition = 'all 1s ease'
    summer.style.backgroundColor = '#fff';
    summer.style.color = '#000';
    winter.style.backgroundColor = '#fff';
    winter.style.color = '#000';
    winter.style.transition = 'all 1s ease'
    summer.style.transition = 'all 1s ease'
    autumn.style.backgroundColor = '#fff';
  autumn.style.transition = 'all 1s ease';
  autumn.style.color = '#000';
    image.setAttribute("src", "./images/springImage.jpg");
    del.style.transition = 'all 1s ease';
  del.style.color = '#000';
  del.style.backgroundColor = '#fff';
  body.style.backgroundColor = 'LightPink'
  });
  summer.addEventListener("click", function () {
    imgWrapper.style.display = "block";
    summer.style.backgroundColor = "transparent";
    summer.style.border = '1px solid white'
    summer.style.color = "white";
    summer.style.transition = 'all 1s ease'
    image.setAttribute("src", "./images/summerImage.jpg");
    // console.log(gap);
    spring.style.transition = 'all 1s ease';
    spring.style.color = '#000';
    spring.style.backgroundColor = '#fff';
    winter.style.transition = 'all 1s ease';
    winter.style.color = '#000';
    winter.style.backgroundColor = '#fff';
    autumn.style.backgroundColor = '#fff';
  autumn.style.transition = 'all 1s ease';
  autumn.style.color = '#000';
  del.style.transition = 'all 1s ease';
  del.style.color = '#000';
  del.style.backgroundColor = '#fff';
  body.style.backgroundColor = 'PaleGoldenrod'
  });
  autumn.addEventListener("click", function(){
    imgWrapper.style.display = "block";
    autumn.style.backgroundColor = "transparent";
    autumn.style.border = '1px solid white'
    autumn.style.color = "white";
    autumn.style.transition = 'all 1s ease'
    image.setAttribute("src", "./images/autumn.jpeg");
    // console.log(gap);
    spring.style.transition = 'all 1s ease';
    spring.style.color = '#000';
    spring.style.backgroundColor = '#fff';
    winter.style.transition = 'all 1s ease';
    winter.style.color = '#000';
    winter.style.backgroundColor = '#fff';
    summer.style.backgroundColor = '#fff';
  summer.style.transition = 'all 1s ease';
  summer.style.color = '#000';
  del.style.transition = 'all 1s ease';
  del.style.color = '#000';
  del.style.backgroundColor = '#fff';
  body.style.backgroundColor = 'Peru'
})
// rasm.style.width = '80vw';
// rasm.style.height = '40vw'
// rasm.style.margin = 'auto'
// image.style.marginRight = '50%'
// imageWrapper.style.width = '80vw'
// imageWrapper.style.height = '40vw'
// imageWrapper.style.margin = '15px,auto'
{/* <canvas id="myCanvas"></canvas> */}

del.addEventListener('click',function(){
  image.setAttribute("src", "./images/bg.png")
  winter.style.transition = 'all 1s ease';
  winter.style.color = '#000';
  winter.style.backgroundColor = '#fff';
  spring.style.transition = 'all 1s ease';
  spring.style.color = '#000';
  spring.style.backgroundColor = '#fff';
  summer.style.backgroundColor = '#fff';
  summer.style.transition = 'all 1s ease';
  summer.style.color = '#000';
  autumn.style.backgroundColor = '#fff';
  autumn.style.transition = 'all 1s ease';
  autumn.style.color = '#000';
  del.style.backgroundColor = "transparent";
    del.style.border = '1px solid white'
    del.style.color = "white";
    imgWrapper.style.display = 'none'
    body.style.backgroundColor = 'white'
})
// headerContainer.style.display = 
