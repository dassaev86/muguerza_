const controller = new ScrollMagic.Controller();

if (window.screen.width > 600) {

// Cuando el objeto .trigger pasa por el trigger marcador se detona la animación tween
const scene = new ScrollMagic.Scene({ triggerElement: ".scene1__char1", duration: 300, offset: -140 })
.setTween("#textbox1", 1, { className: "+=move" })
// .addIndicators({ name: "marker_scene1" })
.addTo(controller);


const scene2 = new ScrollMagic.Scene({ triggerElement: ".scene2", duration: '100%', offset: 110, triggerHook: 0 })
.setTween("#textbox2", 1, { className: "+=move2" })
// .addIndicators({ name: "marker_scene2" })
.setPin('.scene2')
.addTo(controller);

// ANIMACIONES DE LA SCENE3

const scene3 = new ScrollMagic.Scene({ triggerElement: ".scene3", duration: '200%', offset: 0, triggerHook: 0 })
.setTween("#textbox3", 1, { className: "+=move3" })
// .addIndicators({ name: "marker_scene3" })
.addTo(controller);

const scene3b = new ScrollMagic.Scene({ triggerElement: ".scene3", duration: '200%', offset: 0, triggerHook: 0 })
.setTween("#textbox4", 1, { className: "+=move4" })
// .addIndicators({ name: "marker_scene3b" })
.setPin('.scene3')
.addTo(controller);

const scene3c = new ScrollMagic.Scene({ triggerElement: ".scene3", duration: '200%', offset: 0, triggerHook: 0 })
.setTween("#scene3__char4", 1, { className: "+=move-air" })
// .addIndicators({ name: "marker_scene3c" })
.addTo(controller);

// ANIMACIONES DE LA SCENE3

const scene4 = new ScrollMagic.Scene({ triggerElement: ".scene4", duration: '100%', offset: 10, triggerHook: 0 })
.setTween("#textbox5", 1, { className: "+=move5" })
// .addIndicators({ name: "marker_scene4" })
.setPin('.scene4')
.addTo(controller);

const scene5 = new ScrollMagic.Scene({ triggerElement: ".scene5", duration: '100%', offset: 10, triggerHook: 0 })
.setTween("#textbox6", 1, { className: "+=move6" })
// .addIndicators({ name: "marker_scene5" })
.setPin('.scene5')
.addTo(controller);

const scene6 = new ScrollMagic.Scene({ triggerElement: ".scene6", duration: '100%', offset: 10, triggerHook: 0 })
.setTween("#textbox7", 1, { className: "+=move7" })
// .addIndicators({ name: "marker_scene6" })
.setPin('.scene6')
.addTo(controller);

const scene8 = new ScrollMagic.Scene({ triggerElement: ".scene8", duration: '100%', offset: 10, triggerHook: 0 })
.setTween("#textbox9", 1, { className: "+=move9" })
// .addIndicators({ name: "marker_scene8" })
.setPin('.scene8')
.addTo(controller);

}


// window.onresize = function(){ 
//     location.reload(); 
// }

