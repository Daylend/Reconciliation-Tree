trees = {
    "lodgepole-marker": "page2.html",
    "saskatoonbush-marker": "page4.html",
    "sargentpolar-marker": "page6.html",
    "goldenwillow-marker": "page8.html"
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
            location.href = "/pages/" + trees[id];
        }
    }
}
