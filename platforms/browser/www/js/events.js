trees = { "fox-marker": "temp.html" };

AFRAME.registerComponent("accepts-clicks", {
    init: function() {
        this.el.addEventListener("touchend", handleClickEvent);
        this.el.addEventListener("click", handleClickEvent);
    }
});

function handleClickEvent() {
    var fox = document.querySelector("#fox-marker");
    if (fox && fox.object3D.visible) {
        alert("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    }
}
