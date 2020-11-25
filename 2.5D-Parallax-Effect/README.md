# Interactive Developer Course #4

## Demo

> https://parkoon.github.io/aim-to-interactive-dev/2.5D-Parallax-Effect/

## Note (About CSS)

```css
/* Header 에 sticky + 0 을 주고 z-index를 -1 함으로써 다음 요소 뒤에 숨는 효과가 생긴다 */
.header {
  position: sticky;
  top: 0;
  z-index: -1;
}
```

## Note (About JS)

```javascript
// 요소의 움직임을 처리하기 위한 함수
function parallax(element, distance, speed, zAxis) {
  const item = document.querySelector(element);

  item.style.transform = zAxis
    ? `translateY(${distance * speed}px) translateZ(${distance * speed}px)`
    : `translateY(${distance * speed}px)`;
}
```
