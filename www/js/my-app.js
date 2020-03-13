var app = new Framework7({
    root: "#app",
    routes: [
        {
            path: "/home/",
            url: "index.html"
        },
        {
            path: "/page1/",
            url: "pages/page1.html"
        },
        {
            path: "/page2/",
            url: "pages/page2.html"
        },
        {
            path: "/page3/",
            url: "pages/page3.html"
        },
        {
            path: "/page4/",
            url: "pages/page4.html"
        },
        {
            path: "/page5/",
            url: "pages/page5.html"
        },
        {
            path: "/page6/",
            url: "pages/page6.html"
        },
        {
            path: "/page7/",
            url: "pages/page7.html"
        },
        {
            path: "/page8/",
            url: "pages/page8.html"
        },
        {
            path: "/page9/",
            url: "pages/page9.html"
        },
        {
            path: "/page10/",
            url: "pages/page10.html"
        },
        {
            path: "/page11/",
            url: "pages/page11.html"
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

var audio = new Audio("audio/oki.wav");
var audio2 = new Audio("audio/pinus.wav");
var audio4 = new Audio("audio/amelan.wav");
var audio6 = new Audio("audio/popu.wav");
var audio8 = new Audio("audio/salix.wav");

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
