let winter = document.getElementById("winter");
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
let body = document.getElementsByTagName("body");
let imgWrapper = document.getElementById("imageWrapper");
let gap = body.innerHTML;
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
});
spring.addEventListener("click", function () {
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
})