let winter = document.getElementById('winter')
// console.log(winter);
let header = document.querySelector('header');
// console.log(header);
let image = document.getElementById('rasm');
// console.log(image);
let btn = document.getElementsByName('button')
let headerContainer = document.getElementsByClassName('headercontainer')
let spring = document.getElementById('spring');
let summer = document.getElementById('summer');
let autumn = document.getElementById('autumn');
let mainContainer = document.getElementsByClassName('maincontainer')

let body = document.getElementsByTagName('body')
let gap = body.innerHTML;
winter.addEventListener('click', function(){
winter.style.color = 'red'
summer.style.color = 'green'
console.log(gap);
})