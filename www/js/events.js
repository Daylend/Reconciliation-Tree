trees = {
    "lodgepole-marker": "page1.html",
    "saskatoonbush-marker": "page3.html",
    "sargentpoplar-marker": "page5.html",
    "goldenwillow-marker": "page7.html"
};

AFRAME.registerComponent("accepts-clicks", {
    init: function() {
        this.el.addEventListener("touchend", handleClickEvent);
        this.el.addEventListener("click", handleClickEvent);
    }
});

function handleClickEvent() {
    // Select all -marker elements and check if they're visible
    var markers = document.querySelectorAll("[id$='-marker']");
    for (i = 0; i < markers.length; i++) {
        if (markers[i] && markers[i].object3D.visible) {
            // Look up the href using marker id in trees dict
            var id = markers[i].id;
            location.href = "pages/" + trees[id];
        }
    }
}
