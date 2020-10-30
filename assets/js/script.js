var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    this.counterDotSlider = "dot" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}

var slide1 = new Slide(
    "Js.com",
    "Javasript",
    "https://www.awesomeandrew.ru/wp-content/uploads/2020/02/1566556486_1_js.jpg",
    "https://www.awesomeandrew.ru/2020/02/29/4-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0%D1%85-javascript/"
);

var slide2 = new Slide(
    "Html.com",
    "Html",
    "https://itproger.com/img/courses/1476977240.jpg",
    "https://itproger.com/course/html"
);

var slide3 = new Slide(
    "CSS.com",
    "Css",
    "https://www.codespot.org/assets/css.jpg",
    "https://www.codespot.org/css-hover-effects/"
);

var slide4 = new Slide(
    "PHP.com",
    "Php",
    "https://cms-assets.tutsplus.com/uploads/users/769/posts/2985/preview_image/php-tutsplus.png",
    "https://code.tutsplus.com/ru/tutorials/build-your-own-captcha-and-contact-form-in-php--net-5362"
);

function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML +=
            "<div id='" + slideArray[i].id + "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    buildDots();
}
buildSlider();
function prevSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}
function nextSlide(){
    var nextSlideIndex;

    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class",
        "singleSlide slideOutLeft");
    currentSlideIndex = nextSlideIndex;
    fDot(currentSlideIndex);
}

function buildDots(){
    var myHTML = '';
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].counterDotSlider + "' class='dot' onclick='fDot(this.textContent);'><span>"+i+"</span></div>";
    }
    document.getElementById("circles").innerHTML = myHTML;
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
}
function fDot(currentSlideIndex) {
    console.log("dot" +currentSlideIndex);
    for(var i = 0; i < slideArray.length; i++) {
        document.getElementById("dot" + i).classList.remove("dot_active")
        document.getElementById("slide" + i).style.left = 0;
        document.getElementById("slide" + i).setAttribute("class", "singleSlide slideOutLeft");
    }
    document.getElementById("dot" + currentSlideIndex).setAttribute("class", "dot dot_active");
    document.getElementById("slide" + currentSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideInRight");
}