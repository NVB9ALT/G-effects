function applyAccelFov() {
  if (geofs.camera.currentModeName === "follow") {
  var fovAdd = exponentialSmoothing("gsmooth", (1 + (geofs.animation.values.acceleration[0] +  geofs.animation.values.acceleration[1]) / 100) / Math.max((Math.abs(geofs.animation.values.aoa / 50) * Math.abs(geofs.animation.values.kias / 150)), 1), 1);
  geofs.camera.setFOV(fovAdd.toString());
  } 
  else {
    return
  };
}

fovint = setInterval(function(){
  applyAccelFov();
},10)

function gBlackout() {
if (geofs.animation.values.accZ >= 90) {
ui.showCrashNotification()
geofs.camera.animations.orbitHorizontal.active = !1
   }
else {
ui.hideCrashNotification()
   }
}

blackoutInt = setInterval(function(){
   gBlackout();
},10)
