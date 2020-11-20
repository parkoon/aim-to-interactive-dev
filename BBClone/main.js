(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  let currentItem = graphicElems[0]; // 현재 활성화된 그래픽

  // HTML 에 직접 입력해줘도 되지만 스크립트로 처리
  stepElems.forEach((el, i) => {
    el.dataset.index = i;
  });
  graphicElems.forEach((el, i) => {
    // el.setAttribute("data-index", i);
    el.dataset.index = i;
  });

  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    // 루프를 다 돌 필요가 있을까? 근처에 있는 애들의 위치만 체크하면 될 것 같은데 --> intersection observer 로 눈에 보이는 애들을 확인 할 수 있다.
    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      // window 10% ~ 80% 사이에 들어온다면
      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate();
        currentItem = graphicElems[step.dataset.index];
        activate();
      }
    }
  });

  activate();
})();
