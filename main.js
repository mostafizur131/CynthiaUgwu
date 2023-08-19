function circleMouseFollower() {
  window.addEventListener("mousemove", (dets) => {
    let circle = document.querySelector("#mouseCircle");
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
