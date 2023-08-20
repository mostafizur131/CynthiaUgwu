function firstPageAnimation() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingElem", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2,
    })
    .from("#heroFooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", (dets) => {
    let circle = document.querySelector("#mouseCircle");
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
firstPageAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
      duration: 0.5,
    });
  });
});
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffRot = 0;
  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;

    diffRot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffRot * 0.8),
      duration: 0.5,
    });
  });
});
