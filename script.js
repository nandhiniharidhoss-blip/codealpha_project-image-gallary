
let images = [

"mountain.jpg",
"beach.jpg",
"forest.jpg",
"waterfall.jpg",
"desert.jpg",
"city.jpg",
"river.jpg",
"lake.jpg",
"flower.jpg",
"butterfly.jpg",
"elephant.jpg",
"tiger.jpg",
"bird.jpg",
"ocean.jpg",
"sunset.jpg",
"snow.jpg",
"space.jpg",
"galaxy.jpg",
"castle.jpg",
"bridge.jpg"

];


let current = 0;


function openLightbox(index){

    current=index;

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src =
    "images/"+images[current];

}



function closeLightbox(){

    document.getElementById("lightbox").style.display="none";

}



function next(){

    current++;

    if(current>=images.length)
        current=0;

    document.getElementById("lightbox-img").src =
    "images/"+images[current];

}



function previous(){

    current--;

    if(current<0)
        current=images.length-1;

    document.getElementById("lightbox-img").src =
    "images/"+images[current];

}



function filterImages(category){

let all=document.querySelectorAll(".gallery img");


all.forEach(img=>{

    if(category=="all" || img.dataset.category==category)

        img.style.display="block";

    else

        img.style.display="none";

});

}
