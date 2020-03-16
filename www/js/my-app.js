var app = new Framework7({
    root: "#app",
    routes: [
        {
            path: "/home/",
            url: "index.html"
        },
        {
            path: "/page1/",
            url: "page1.html"
        },
        {
            path: "/page2/",
            url: "page2.html"
        },
        {
            path: "/page3/",
            url: "page3.html"
        },
        {
            path: "/page4/",
            url: "page4.html"
        },
        {
            path: "/page5/",
            url: "page5.html"
        },
        {
            path: "/page6/",
            url: "page6.html"
        },
        {
            path: "/page7/",
            url: "page7.html"
        },
        {
            path: "/page8/",
            url: "page8.html"
        },
        {
            path: "/page9/",
            url: "pages/page9.html"
        },
        {
            path: "/page10/",
            url: "page10.html"
        },
        {
            path: "/page11/",
            url: "plantindex.html"
        },
        {
            path: "/ar/",
            url: "arwrapper.html"
        }
    ]
});
var mainView = app.views.create(".view-main");

//var mainView = app.views.create(".view-main", {
//	domCache: true;
//});

console.log("bonjour");

var $$ = Dom7;

var audio = new Audio("../audio/oki.wav");
var audio2 = new Audio("../audio/pinus.wav");
var audio4 = new Audio("../audio/amelan.wav");
var audio6 = new Audio("../audio/popu.wav");
var audio8 = new Audio("../audio/salix.wav");

function playAudio() {
    audio.play();
}
function playAudio2() {
    audio2.play();
}
function playAudio4() {
    audio4.play();
}
function playAudio6() {
    audio6.play();
}
function playAudio8() {
    audio8.play();
}
