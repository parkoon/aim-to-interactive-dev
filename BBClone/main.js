(() => {
  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key) {
      if (key) {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translate(${window.innerWidth}px, ${
          -window.innerHeight * 0.7
        }px)`;
      } else {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translateX(-100%)`;
      }
    },
  };

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  let currentItem = graphicElems[0]; // 현재 활성화된 그래픽
  let ioIndex;

  // 관찰하고 있는 객체가 생기거나 사라질 떄 콜백 함수가 실행된다.
  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  // HTML 에 직접 입력해줘도 되지만 스크립트로 처리
  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate(action) {
    currentItem.classList.add("visible");

    if (action) {
      actions[action](true);
    }
  }

  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    // 루프를 다 돌 필요가 있을까? 근처에 있는 애들의 위치만 체크하면 될 것 같은데 --> intersection observer 로 눈에 보이는 애들을 확인 할 수 있다.
    // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];

      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      // window 10% ~ 80% 사이에 들어온다면
      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate(currentItem.dataset.action);
        currentItem = graphicElems[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  });

  activate();
})();
