var navtag = document.querySelector('nav');
var navtagpos = navtag.getBoundingClientRect().top + window.pageYOffset;
//navタグの絶対位置を取得して格納

window.addEventListener('scroll',function(){

    if(window.scrollY >= navtagpos){

        navtag.classList.add('posfix');
    }
    else{
        navtag.classList.remove('posfix');
    }
});

var btn = document.getElementsByClassName('btn');
        btn[0].onclick = function(){
        btn[0].classList.add('changebg');
          };
