
let images=[];

let currentIndex=0;



window.onload=function(){

images=[
...document.querySelectorAll(".card img")
];

}




function filterImages(category){

let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


if(category=="all" || card.classList.contains(category))

{

card.style.display="block";

}

else

{

card.style.display="none";

}


});


}




function openLightbox(img){

document.getElementById("lightbox").style.display="flex";


currentIndex=
images.indexOf(img);


showImage();

}



function showImage(){

document.getElementById("largeImage")
.src=images[currentIndex].src;

}




function closeLightbox(){

document.getElementById("lightbox")
.style.display="none";

}




function nextImage(){

currentIndex++;

if(currentIndex>=images.length)

currentIndex=0;


showImage();

}




function previousImage(){

currentIndex--;

if(currentIndex<0)

currentIndex=images.length-1;


showImage();

}
