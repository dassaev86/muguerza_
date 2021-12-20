const controller = new ScrollMagic.Controller();

// Cuando el objeto .trigger pasa por el trigger marcador se detona la animación tween
const scene = new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 300, offset: -200 })
.setTween("#textbox1", 1, { className: "+=move" })
.addIndicators({ name: "marker" })
.addTo(controller);


const scene2 = new ScrollMagic.Scene({ triggerElement: ".trigger", duration: 300, offset: 800 })
.setTween("#textbox2", 1, { className: "+=move2" })
.addIndicators({ name: "marker_scene2" })
.addTo(controller);