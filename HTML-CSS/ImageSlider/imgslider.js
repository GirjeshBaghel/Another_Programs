
let count =1;
function navigate(x)
{
    count = count+ x
    slideshow(count);
}
slideshow(count);

function slideshow(num)
{
    let slides = document.getElementsByClassName("slide")
    console.log(slides)

    if(num==slides.length){
        num =0
        count=0
    }
    else if(num<0){
        num=slides.length-1
        count=slides.length-1
    }
    for(let y of slides)
    {
        y.style.display="none"
    }
    slides[num].style.display="block"

}
