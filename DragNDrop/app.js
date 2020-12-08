const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault(); // preventDefault를 호출해 추가적인 이벤트 (터치 이벤트나 포인터 이벤트) 가 일어나지 않도록 합니다.
    const afterEl = getDragAfterElement(container, e.clientY);

    console.log(afterEl);
    const draggable = document.querySelector(".dragging");

    if (!afterEl) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterEl);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableEl = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ]; // container.querySelectorAll(".draggable:not(.dragging)") 는 일반 배열을 반환하지 않기 때문에 다음과 같이 배열로 변경 할 수 있다.

  return draggableEl.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
