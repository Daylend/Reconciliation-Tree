AFRAME.registerComponent("accepts-clicks", {
    init: function() {
        this.el.addEventListener("touchend", handleClickEvent);
        this.el.addEventListener("click", handleClickEvent);
    }
});

function handleClickEvent() {
    alert("AHHHHHHHHHHH");
    /*builders.forEach(function(builder) {
      var builderMarker = document.querySelector("#" + builder.name + "-marker");
      if (builderMarker && builderMarker.object3D.visible) {
        if (searchForBuilderTool(builder)){
          toggleSpeechBubble(builder.successDialogue);
        } else {
          toggleSpeechBubble(builder.dialogue);
        }
      }
    });
  
    tools.forEach(function(tool){
      var toolMarker = document.querySelector("#" + tool.name + "-marker");
      if (toolMarker && toolMarker.object3D.visible) {
        toggleSpeechBubble(tool.dialogue);
        if (!userState.hasBuilderTool(tool)) userState.addTool(tool);
      }
    });*/
}
