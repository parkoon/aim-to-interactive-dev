(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  let currentItem; // 현재 활성화된 그래픽

  // HTML 에 직접 입력해줘도 되지만 스크립트로 처리
  stepElems.forEach((el, i) => {
    el.dataset.index = i;
  });
  graphicElems.forEach((el, i) => {
    // el.setAttribute("data-index", i);
    el.dataset.index = i;
  });

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      // window 10% ~ 80% 사이에 들어온다면
      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        if (currentItem) {
          currentItem.classList.remove("visible");
        }
        currentItem = graphicElems[step.dataset.index];
        currentItem.classList.add("visible");
      }
    }
  });
})();
