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
