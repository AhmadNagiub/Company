
$(function () {
    $('html').niceScroll({
        
        cursorcolor: '#09c',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #099',
    });

    
})

var lis  = document.querySelectorAll(".gallery-ul li")
var imgs = document.querySelectorAll(".gallery .images .image");

lis.forEach(li =>{
    li.addEventListener("click" ,function(event) {
            lis.forEach(li =>{
                li.classList.remove("active")
            })
            if(event.target.classList.contains("active") == false){
                event.target.classList.add("active")
                if(event.target.dataset.class === "all"){
                    imgs.forEach(img =>{
                        img.style.display="inline-block"
                    })
                }
                else{
                    imgs.forEach(img =>{
                        img.style.display="none"
                        document.querySelectorAll(li.dataset.class).forEach(im=>{
                            im.style.display="inline-block"
                        })
                    })

                }
            }
    })
})
// Data set for images to make it display none

// slider 
//vars
left = $(".left");
right = $('.right');
slider =$('.sliders .slider');
sliders = document.querySelector(".sliders")

// check Testiomonials
function checkTesti(){
 sliders.firstElementChild.classList.contains("active-slide") ? left.fadeOut() : left.fadeIn();
 sliders.lastElementChild.classList.contains("active-slide") ? right.fadeOut() : right.fadeIn();
}
checkTesti();
$('.i').click(function () {
        
    if ($(this).hasClass('right')) {
        
        $('.active-slide').fadeOut(100, function () {
           
            $(this).removeClass('active-slide').next('.slider').addClass('active-slide').fadeIn();
            
            checkTesti();
            
        });
        
    } else {
        
        $('.active-slide').fadeOut(100, function () {
           
            $(this).removeClass('active-slide').prev('.slider').addClass('active-slide').fadeIn();
            
            checkTesti();
            
        });
        
    }
    
});

let toggle = document.querySelector(".menu-toggle");
let firstChild = document.querySelector(".menu-toggle li:first-child");
let secondChild = document.querySelector(".menu-toggle li:nth-child(2)");
let lastChild = document.querySelector(".menu-toggle li:last-child");
let ul = document.querySelector(".nav-menu ul");
let a = document.querySelector(".nav-menu ul li a ");
toggle.addEventListener("click" , function () {
    if(firstChild.classList.contains("first")){
        firstChild.classList.remove("first");
        secondChild.classList.remove("second");
        secondChild.style.backgroundColor="#09c"
        lastChild.classList.remove("third");
        ul.style.opacity="0";
        ul.style.top="-50px";
    }
    else{
        firstChild.classList.add("first");
        secondChild.classList.add("second");
        secondChild.style.backgroundColor="transparent"
        lastChild.classList.add("third");
        ul.style.opacity="1";
        ul.style.top="70px";
        a.style.pointerEvents= "none"
    }

})
