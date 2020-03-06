trees = {
    "fox-marker": "map.html",
    "scotspine-marker": "scotspine.html",
    "sargentpolar-marker": "sargentpolar.html",
    "goldenwillow-marker": "goldenwillow.html",
    "saskatoonbush-marker": "saskatoonbush.html"
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
            location.href = trees[id];
        }
    }
}
